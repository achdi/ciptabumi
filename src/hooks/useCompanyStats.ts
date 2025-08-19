import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface CompanyStat {
  id: string;
  label_en: string;
  value: string;
  color: string;
  sort_order: number;
  is_active: boolean;
}

export const useCompanyStats = () => {
  return useQuery({
    queryKey: ["company-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("company_stats")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data as CompanyStat[];
    },
  });
};