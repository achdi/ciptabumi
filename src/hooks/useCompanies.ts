import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export interface Company {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  icon_name: string;
  color: string;
  bg_color: string;
  logo_url?: string;
  sort_order: number;
}

export const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data, error } = await supabase
          .from('companies')
          .select('*')
          .eq('is_active', true)
          .order('sort_order');

        if (error) throw error;

        // Map the data to use the correct language
        const mappedCompanies = data.map((company) => ({
          id: company.id,
          name: company.name,
          url: company.url,
          description: language === 'id' ? company.description_id : company.description_en,
          category: language === 'id' ? company.category_id : company.category_en,
          icon_name: company.icon_name,
          color: company.color,
          bg_color: company.bg_color,
          logo_url: company.logo_url,
          sort_order: company.sort_order,
        }));

        setCompanies(mappedCompanies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [language]);

  return { companies, loading, error };
};