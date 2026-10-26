import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Car, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenCustomTour?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Sewa Mobil', href: '#sewa-mobil' },
    { label: 'Paket Tour', href: '#paket-wisata' },
    { label: 'Tentang Kami', href: '#keunggulan' },
    { label: 'Kontak', href: '#testimoni' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-20 bg-white/90 dark:bg-[#12161A]/90 backdrop-blur-md border-b border-[#E9DFCE] dark:border-[#282E38] shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Column 1: Brand Logo (Left) */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group active:scale-95 transition-transform duration-150"
            aria-label="Nusantara Trans Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-white shadow-md shadow-[#C59E30]/25 shrink-0">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F1F5F9] group-hover:text-[#B8860B] dark:group-hover:text-[#C5A059] transition-colors whitespace-nowrap">
                Nusantara Trans
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#8F6705] dark:text-[#C5A059] -mt-0.5 sm:-mt-1 whitespace-nowrap">
                Tour &amp; Rental Service
              </span>
            </div>
          </a>

          {/* Column 2: Main Navigation Links (Middle - Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#334155] hover:text-[#B8860B] dark:text-[#94A3B8] dark:hover:text-[#C5A059] transition-colors text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Column 3: Actions (Right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Fast Response 24 Jam Badge on Large Screens */}
            <div className="hidden xl:flex flex-col items-end pr-2">
              <div className="flex items-center gap-1.5 text-[#8F6705] dark:text-[#C5A059] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#B8860B] dark:bg-[#C5A059] animate-pulse"></span>
                <span>Fast Response 24 Jam</span>
              </div>
            </div>

            {/* Minimalist Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              className="p-2 sm:p-2.5 rounded-xl border border-[#E9DFCE] dark:border-[#282E38] bg-white dark:bg-[#181C22] hover:bg-[#FAF7F2] dark:hover:bg-[#262015] text-[#334155] dark:text-[#C5A059] hover:text-[#B8860B] dark:hover:text-[#D4AF65] shadow-xs transition-all active:scale-95 cursor-pointer"
              title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-[#334155] transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Single Primary Action CTA (Desktop Only) */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20pesan%20sewa%20mobil%20atau%20paket%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#B8860B]/20 hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">
                support_agent
              </span>
              <span>Hubungi WhatsApp</span>
            </a>

            {/* Hamburger Button (Mobile & Tablet < lg) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 rounded-xl text-[#334155] dark:text-[#CBD5E1] hover:bg-[#FAF7F2] dark:hover:bg-[#1E232B] transition-colors cursor-pointer border border-[#E9DFCE] dark:border-[#282E38]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Slide-Over Sheet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Over Drawer Sheet */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white dark:bg-[#12161A] border-l border-[#E9DFCE] dark:border-[#282E38] shadow-2xl p-6 flex flex-col justify-between z-50 animate-slideLeft">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#EFE9DE] dark:border-[#282E38]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-white shadow-xs">
                    <Car className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                    Nusantara Trans
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
                    className="p-2 rounded-xl border border-[#E9DFCE] dark:border-[#282E38] bg-[#FAF9F5] dark:bg-[#181C22] text-[#334155] dark:text-[#C5A059]"
                  >
                    {isDarkMode ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-[#334155]" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Tutup menu"
                    className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white hover:bg-[#FAF7F2] dark:hover:bg-[#1E232B] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Vertical Navigation Links with Large Touch Targets */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium text-[#334155] dark:text-[#CBD5E1] hover:text-[#B8860B] dark:hover:text-[#C5A059] hover:bg-[#FCF9EE] dark:hover:bg-[#1E232B] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#94A3B8] dark:text-slate-600" />
                  </a>
                ))}
              </nav>

              {/* Hotline Contact Info */}
              <div className="mt-8 p-4 rounded-2xl bg-[#FAF9F5] dark:bg-[#181C22] border border-[#EFE9DE] dark:border-[#282E38] text-xs text-[#475569] dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                  <Phone className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#C5A059]" />
                  <span>Call Center 24 Jam</span>
                </div>
                <p className="text-[#64748B] dark:text-[#94A3B8]">
                  +62 812-3456-7890 (Layanan Cepat)
                </p>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#EFE9DE] dark:border-[#282E38] space-y-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20pesan%20sewa%20mobil%20atau%20paket%20tour."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-11 flex items-center justify-center gap-2 font-semibold text-sm rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white shadow-md shadow-[#B8860B]/25 hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span className="material-symbols-outlined text-[19px]">
                  support_agent
                </span>
                <span>Hubungi WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-[#94A3B8] dark:text-slate-500">
                PT Nusantara Trans Indonesia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
