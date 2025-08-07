import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  id: {
    // Header
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.portfolio': 'Portofolio',
    'nav.investor': 'Investor',
    'nav.contact': 'Kontak',
    
    // Common
    'common.back': 'Kembali',
    
    // Hero Section
    'hero.title': 'Ciptabumi Group',
    'hero.subtitle': 'Perusahaan holding terdepan di bidang teknologi informasi dan perdagangan internasional. Menghubungkan inovasi digital dengan peluang global.',
    'hero.cta.portfolio': 'Jelajahi Portofolio',
    'hero.cta.contact': 'Hubungi Kami',
    'hero.stats.platforms': 'Platform Digital',
    'hero.stats.clients': 'Klien Aktif',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Negara',
    
    // About Section
    'about.title': 'Tentang Ciptabumi Group',
    'about.description': 'Kami adalah perusahaan holding yang berfokus pada inovasi teknologi informasi dan perdagangan internasional. Dengan pengalaman lebih dari satu dekade, kami telah membangun ekosistem digital yang terintegrasi dan berkelanjutan.',
    'about.feature.holding.title': 'Holding Company',
    'about.feature.holding.desc': 'Struktur perusahaan holding yang mengelola berbagai anak perusahaan di bidang teknologi dan perdagangan.',
    'about.feature.trade.title': 'Ekspor Impor',
    'about.feature.trade.desc': 'Jaringan perdagangan internasional yang luas dengan fokus pada komoditas teknologi dan produk digital.',
    'about.feature.tech.title': 'Teknologi Informasi',
    'about.feature.tech.desc': 'Solusi teknologi terdepan meliputi web hosting, aplikasi builder, dan platform digital inovatif.',
    'about.feature.social.title': 'Social Media',
    'about.feature.social.desc': 'Platform media sosial yang menghubungkan komunitas global dengan teknologi canggih.',
    'about.vision.title': 'Visi & Misi',
    'about.vision.label': 'Visi',
    'about.vision.text': 'Menjadi perusahaan holding teknologi terdepan di Asia Tenggara yang menghubungkan inovasi digital dengan peluang bisnis global.',
    'about.mission.label': 'Misi',
    'about.mission.1': '• Mengembangkan ekosistem digital yang terintegrasi',
    'about.mission.2': '• Memfasilitasi perdagangan internasional melalui teknologi',
    'about.mission.3': '• Menciptakan platform inovatif untuk pertumbuhan bisnis',
    'about.mission.4': '• Membangun komunitas digital yang berkelanjutan',
    'about.values.title': 'Nilai Perusahaan',
    'about.values.innovation': 'Inovasi',
    'about.values.innovation.desc': 'Selalu di garis depan teknologi',
    'about.values.integrity': 'Integritas',
    'about.values.integrity.desc': 'Transparansi dalam setiap langkah',
    'about.values.collaboration': 'Kolaborasi',
    'about.values.collaboration.desc': 'Kekuatan dalam kemitraan',
    'about.values.excellence': 'Excelence',
    'about.values.excellence.desc': 'Standar kualitas tertinggi',
    
    // Contact Section
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Siap untuk memulai kemitraan atau memiliki pertanyaan? Tim ahli kami siap membantu mewujudkan visi digital Anda.',
    'contact.info.title': 'Informasi Kontak',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.address': 'Alamat',
    'contact.hours.title': 'Jam Operasional',
    'contact.hours.weekdays': 'Senin - Jumat:',
    'contact.hours.weekdays.time': '08:00 - 17:00 WIB',
    'contact.hours.saturday': 'Sabtu:',
    'contact.hours.saturday.time': '09:00 - 11:00 WIB',
    'contact.hours.sunday': 'Minggu:',
    'contact.hours.sunday.time': 'Tutup',
    'contact.form.title': 'Kirim Pesan',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.name.placeholder': 'Masukkan nama lengkap',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'nama@email.com',
    'contact.form.subject': 'Subjek',
    'contact.form.subject.placeholder': 'Subjek pesan',
    'contact.form.message': 'Pesan',
    'contact.form.message.placeholder': 'Tulis pesan Anda di sini...',
    'contact.form.send': 'Kirim Pesan',
    
    // Investor Section
    'investor.hero.title': 'Investasi Masa Depan',
    'investor.hero.subtitle': 'Bergabunglah dengan ekosistem teknologi terdepan di Asia Tenggara. Ciptabumi Group menawarkan peluang investasi yang menguntungkan dengan portofolio perusahaan yang terintegrasi di berbagai sektor digital.',
    'investor.stats.platforms': 'Platform Digital',
    'investor.stats.users': 'Pengguna Aktif',
    'investor.stats.countries': 'Negara',
    'investor.stats.uptime': 'Ketersediaan Sistem',
    'investor.highlights.title': 'Mengapa Investasi di Ciptabumi?',
    'investor.highlights.subtitle': 'Keunggulan kompetitif yang menjadikan Ciptabumi Group pilihan investasi yang strategis.',
    'investor.growth.title': 'Pertumbuhan Konsisten',
    'investor.growth.desc': 'Pencapaian pertumbuhan revenue 150% year-over-year dengan ekspansi ke 15+ negara di Asia Tenggara.',
    'investor.market.title': 'Posisi Pasar Strategis',
    'investor.market.desc': 'Market leader di berbagai vertical dengan penetrasi pasar yang kuat dan basis pengguna yang loyal.',
    'investor.innovation.title': 'Inovasi Berkelanjutan',
    'investor.innovation.desc': 'Tim R&D terdepan dengan track record meluncurkan produk-produk revolusioner yang mengubah industri.',
    'investor.opportunity.title': 'Peluang Investasi',
    'investor.opportunity.subtitle': 'Jadilah bagian dari transformasi digital yang menguntungkan dan berkelanjutan.',
    'investor.vision.title': 'Visi Strategis',
    'investor.vision.point1': 'Ekspansi ke seluruh Asia Tenggara dengan target 10 juta pengguna aktif pada 2025',
    'investor.vision.point2': 'Integrasi AI dan blockchain technology untuk menciptakan solusi next-generation',
    'investor.vision.point3': 'Partnership strategis dengan global tech giants untuk mempercepat growth',
    'investor.form.title': 'Hubungi Tim Investor Relations',
    'investor.form.name': 'Nama Lengkap',
    'investor.form.name.placeholder': 'Masukkan nama lengkap',
    'investor.form.company': 'Perusahaan/Institusi',
    'investor.form.company.placeholder': 'Nama perusahaan atau institusi',
    'investor.form.email': 'Email',
    'investor.form.email.placeholder': 'investor@email.com',
    'investor.form.phone': 'Nomor Telepon',
    'investor.form.phone.placeholder': '+62 XXX XXXX XXXX',
    'investor.form.message': 'Pesan',
    'investor.form.message.placeholder': 'Jelaskan minat investasi Anda...',
    'investor.form.send': 'Kirim Pesan',
    'investor.form.success': 'Pesan Terkirim!',
    'investor.form.success.desc': 'Tim kami akan menghubungi Anda dalam 24 jam.',
    'investor.contact.title': 'Kontak Investor Relations',
    'investor.contact.subtitle': 'Tim profesional kami siap membantu kebutuhan investasi Anda.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.investor': 'Investor',
    'nav.contact': 'Contact',
    
    // Common
    'common.back': 'Back',
    
    // Hero Section
    'hero.title': 'Ciptabumi Group',
    'hero.subtitle': 'Leading holding company in information technology and international trade. Connecting digital innovation with global opportunities.',
    'hero.cta.portfolio': 'Explore Portfolio',
    'hero.cta.contact': 'Contact Us',
    'hero.stats.platforms': 'Digital Platforms',
    'hero.stats.clients': 'Active Clients',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Countries',
    
    // About Section
    'about.title': 'About Ciptabumi Group',
    'about.description': 'We are a holding company focused on information technology innovation and international trade. With more than a decade of experience, we have built an integrated and sustainable digital ecosystem.',
    'about.feature.holding.title': 'Holding Company',
    'about.feature.holding.desc': 'Holding company structure that manages various subsidiaries in technology and trade sectors.',
    'about.feature.trade.title': 'Export Import',
    'about.feature.trade.desc': 'Extensive international trade network focusing on technology commodities and digital products.',
    'about.feature.tech.title': 'Information Technology',
    'about.feature.tech.desc': 'Leading technology solutions including web hosting, application builders, and innovative digital platforms.',
    'about.feature.social.title': 'Social Media',
    'about.feature.social.desc': 'Social media platforms that connect global communities with advanced technology.',
    'about.vision.title': 'Vision & Mission',
    'about.vision.label': 'Vision',
    'about.vision.text': 'To become the leading technology holding company in Southeast Asia that connects digital innovation with global business opportunities.',
    'about.mission.label': 'Mission',
    'about.mission.1': '• Develop an integrated digital ecosystem',
    'about.mission.2': '• Facilitate international trade through technology',
    'about.mission.3': '• Create innovative platforms for business growth',
    'about.mission.4': '• Build sustainable digital communities',
    'about.values.title': 'Company Values',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Always at the forefront of technology',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Transparency in every step',
    'about.values.collaboration': 'Collaboration',
    'about.values.collaboration.desc': 'Strength in partnership',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Highest quality standards',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start a partnership or have questions? Our expert team is ready to help realize your digital vision.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.hours.title': 'Operating Hours',
    'contact.hours.weekdays': 'Monday - Friday:',
    'contact.hours.weekdays.time': '08:00 - 17:00 WIB',
    'contact.hours.saturday': 'Saturday:',
    'contact.hours.saturday.time': '09:00 - 11:00 WIB',
    'contact.hours.sunday': 'Sunday:',
    'contact.hours.sunday.time': 'Closed',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Enter full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'name@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Message subject',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.send': 'Send Message',
    
    // Investor Section
    'investor.hero.title': 'Invest in the Future',
    'investor.hero.subtitle': 'Join Southeast Asia\'s leading technology ecosystem. Ciptabumi Group offers profitable investment opportunities with an integrated portfolio of companies across various digital sectors.',
    'investor.stats.platforms': 'Digital Platforms',
    'investor.stats.users': 'Active Users',
    'investor.stats.countries': 'Countries',
    'investor.stats.uptime': 'System Uptime',
    'investor.highlights.title': 'Why Invest in Ciptabumi?',
    'investor.highlights.subtitle': 'Competitive advantages that make Ciptabumi Group a strategic investment choice.',
    'investor.growth.title': 'Consistent Growth',
    'investor.growth.desc': 'Achieved 150% year-over-year revenue growth with expansion to 15+ countries in Southeast Asia.',
    'investor.market.title': 'Strategic Market Position',
    'investor.market.desc': 'Market leader across various verticals with strong market penetration and loyal user base.',
    'investor.innovation.title': 'Continuous Innovation',
    'investor.innovation.desc': 'Leading R&D team with a proven track record of launching revolutionary products that transform industries.',
    'investor.opportunity.title': 'Investment Opportunity',
    'investor.opportunity.subtitle': 'Be part of a profitable and sustainable digital transformation.',
    'investor.vision.title': 'Strategic Vision',
    'investor.vision.point1': 'Expansion across Southeast Asia targeting 10 million active users by 2025',
    'investor.vision.point2': 'Integration of AI and blockchain technology to create next-generation solutions',
    'investor.vision.point3': 'Strategic partnerships with global tech giants to accelerate growth',
    'investor.form.title': 'Contact Investor Relations Team',
    'investor.form.name': 'Full Name',
    'investor.form.name.placeholder': 'Enter full name',
    'investor.form.company': 'Company/Institution',
    'investor.form.company.placeholder': 'Company or institution name',
    'investor.form.email': 'Email',
    'investor.form.email.placeholder': 'investor@email.com',
    'investor.form.phone': 'Phone Number',
    'investor.form.phone.placeholder': '+62 XXX XXXX XXXX',
    'investor.form.message': 'Message',
    'investor.form.message.placeholder': 'Describe your investment interest...',
    'investor.form.send': 'Send Message',
    'investor.form.success': 'Message Sent!',
    'investor.form.success.desc': 'Our team will contact you within 24 hours.',
    'investor.contact.title': 'Investor Relations Contact',
    'investor.contact.subtitle': 'Our professional team is ready to assist with your investment needs.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'id';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};