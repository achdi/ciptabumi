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
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'TechHolding Group',
    'hero.subtitle': 'Perusahaan holding terdepan di bidang teknologi informasi dan perdagangan internasional. Menghubungkan inovasi digital dengan peluang global.',
    'hero.cta.portfolio': 'Jelajahi Portofolio',
    'hero.cta.contact': 'Hubungi Kami',
    'hero.stats.platforms': 'Platform Digital',
    'hero.stats.clients': 'Klien Aktif',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Negara',
    
    // About Section
    'about.title': 'Tentang TechHolding Group',
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
    'contact.hours.saturday.time': '09:00 - 15:00 WIB',
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
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'TechHolding Group',
    'hero.subtitle': 'Leading holding company in information technology and international trade. Connecting digital innovation with global opportunities.',
    'hero.cta.portfolio': 'Explore Portfolio',
    'hero.cta.contact': 'Contact Us',
    'hero.stats.platforms': 'Digital Platforms',
    'hero.stats.clients': 'Active Clients',
    'hero.stats.support': 'Support',
    'hero.stats.countries': 'Countries',
    
    // About Section
    'about.title': 'About TechHolding Group',
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
    'contact.hours.saturday.time': '09:00 - 15:00 WIB',
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