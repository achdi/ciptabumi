import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }]);

      if (error) throw error;

      toast({
        title: "Pesan Berhasil Dikirim",
        description: "Terima kasih! Kami akan segera menghubungi Anda.",
      });

      return true;
    } catch (err) {
      toast({
        title: "Gagal Mengirim Pesan",
        description: err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim pesan.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContactForm, isSubmitting };
};