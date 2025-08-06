import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export interface CompanyStat {
  id: string;
  label: string;
  value: string;
  color: string;
  sort_order: number;
}

export const useCompanyStats = () => {
  const [stats, setStats] = useState<CompanyStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('company_stats')
          .select('*')
          .eq('is_active', true)
          .order('sort_order');

        if (error) throw error;

        // Map the data to use the correct language
        const mappedStats = data.map((stat) => ({
          id: stat.id,
          label: language === 'id' ? stat.label_id : stat.label_en,
          value: stat.value,
          color: stat.color,
          sort_order: stat.sort_order,
        }));

        setStats(mappedStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch company stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [language]);

  return { stats, loading, error };
};