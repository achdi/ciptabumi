import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'id' ? 'EN' : 'ID'}
      </span>
    </Button>
  );
};

export default LanguageToggle;