-- Create storage buckets for company assets
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('company-logos', 'company-logos', true),
  ('hero-images', 'hero-images', true),
  ('general-assets', 'general-assets', true);

-- Create storage policies for public access
CREATE POLICY "Company logos are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'company-logos');

CREATE POLICY "Hero images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'hero-images');

CREATE POLICY "General assets are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'general-assets');

-- Create policies for file uploads (anyone can upload for now)
CREATE POLICY "Anyone can upload company logos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'company-logos');

CREATE POLICY "Anyone can upload hero images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'hero-images');

CREATE POLICY "Anyone can upload general assets" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'general-assets');

-- Create companies table
CREATE TABLE public.companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  description_id TEXT NOT NULL,
  description_en TEXT NOT NULL,
  category_id TEXT NOT NULL,
  category_en TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color TEXT NOT NULL,
  bg_color TEXT NOT NULL,
  logo_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company stats table
CREATE TABLE public.company_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label_id TEXT NOT NULL,
  label_en TEXT NOT NULL,
  value TEXT NOT NULL,
  color TEXT DEFAULT 'text-primary',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Companies are viewable by everyone" 
ON public.companies 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Company stats are viewable by everyone" 
ON public.company_stats 
FOR SELECT 
USING (is_active = true);

-- Contact messages can only be inserted
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON public.companies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_stats_updated_at
  BEFORE UPDATE ON public.company_stats
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default company data
INSERT INTO public.companies (name, url, description_id, description_en, category_id, category_en, icon_name, color, bg_color, sort_order) VALUES
  ('MoreTrip', 'www.moretrip.id', 
   'Platform perjalanan dan wisata digital yang menyediakan layanan booking hotel, tiket pesawat, dan paket wisata.',
   'Digital travel and tourism platform providing hotel bookings, flight tickets, and tour package services.',
   'Travel & Tourism', 'Travel & Tourism',
   'Plane', 'text-blue-500', 'bg-blue-500/20', 1),
   
  ('LotFriends', 'www.lotfriends.com',
   'Platform media sosial yang menghubungkan komunitas global dengan fitur-fitur interaktif dan kreatif.',
   'Social media platform connecting global communities with interactive and creative features.',
   'Social Media', 'Social Media',
   'Users', 'text-pink-500', 'bg-pink-500/20', 2),
   
  ('Coretan Digital', 'www.coretan.digital',
   'Platform media sosial dan blog digital untuk content creator dan komunitas kreatif Indonesia.',
   'Social media and digital blog platform for content creators and Indonesian creative communities.',
   'Social Media', 'Social Media',
   'Edit3', 'text-purple-500', 'bg-purple-500/20', 3),
   
  ('MauBuat', 'www.maubuat.com',
   'Penyedia layanan web hosting premium dan aplikasi builder untuk kebutuhan bisnis digital modern.',
   'Premium web hosting services and application builder provider for modern digital business needs.',
   'Web Services', 'Web Services',
   'Globe', 'text-green-500', 'bg-green-500/20', 4),
   
  ('UnderSystem', 'www.undersystem.net',
   'Solusi sistem keamanan dan infrastruktur teknologi untuk enterprise dan bisnis skala besar.',
   'Security systems and technology infrastructure solutions for enterprise and large-scale businesses.',
   'Technology', 'Technology',
   'Shield', 'text-orange-500', 'bg-orange-500/20', 5);

-- Insert default company stats
INSERT INTO public.company_stats (label_id, label_en, value, color, sort_order) VALUES
  ('Platform', 'Platforms', '5', 'text-primary', 1),
  ('Uptime', 'Uptime', '99.9%', 'text-accent', 2),
  ('Users', 'Users', '1M+', 'text-success', 3),
  ('Support', 'Support', '24/7', 'text-primary-glow', 4);