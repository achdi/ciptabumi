import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const { error } = await supabase
        .from("contact_messages")
        .insert([data]);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast({
        title: "Pesan Berhasil Dikirim",
        description: "Terima kasih! Kami akan menghubungi Anda segera.",
      });
    },
    onError: (error) => {
      toast({
        title: "Gagal Mengirim Pesan",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};