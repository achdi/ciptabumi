import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Company {
  id: string;
  name: string;
  url: string;
  description_en: string;
  category_en: string;
  icon_name: string;
  color: string;
  bg_color: string;
  logo_url?: string;
  sort_order: number;
  is_active: boolean;
}

export const useCompanies = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data as Company[];
    },
  });
};