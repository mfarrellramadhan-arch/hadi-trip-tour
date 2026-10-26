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
      <header className="sticky top-0 z-50 w-full h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Column 1: Brand Logo (Left) */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group active:scale-95 transition-transform duration-150"
            aria-label="Nusantara Trans Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9E7B1D] via-[#C5A059] to-[#E5C578] flex items-center justify-center text-white dark:text-slate-900 font-bold shadow-sm shadow-[#C5A059]/20 shrink-0">
              <Car className="w-5 h-5 text-white dark:text-slate-900" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-normal text-slate-900 dark:text-white group-hover:text-[#9E7B1D] dark:group-hover:text-[#C5A059] transition-colors whitespace-nowrap">
                Nusantara Trans
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E7B1D] dark:text-[#C5A059] -mt-1 whitespace-nowrap">
                Tour &amp; Rental
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
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Column 3: Actions (Right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Minimalist Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Single Primary Action CTA (Desktop Only) */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20pesan%20sewa%20mobil%20atau%20paket%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:from-[#C5A059] hover:to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap"
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
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between z-50 animate-slideLeft">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9E7B1D] to-[#C5A059] flex items-center justify-center text-white dark:text-slate-900 font-bold shadow-xs">
                    <Car className="w-4 h-4 text-white dark:text-slate-900" />
                  </div>
                  <span className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                    Nusantara Trans
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Tutup menu"
                  className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Navigation Links with Large Touch Targets */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                  </a>
                ))}
              </nav>

              {/* Hotline Contact Info */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Center 24 Jam</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400">
                  +62 812-3456-7890 (Layanan Cepat)
                </p>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20pesan%20sewa%20mobil%20atau%20paket%20tour."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-11 flex items-center justify-center gap-2 font-semibold text-sm rounded-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span className="material-symbols-outlined text-[19px]">
                  support_agent
                </span>
                <span>Hubungi WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                PT Nusantara Trans Indonesia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
