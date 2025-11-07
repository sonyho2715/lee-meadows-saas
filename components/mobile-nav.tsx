"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Calculator, Shield, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function MobileNav() {
  const { language } = useLanguage();
  const t = componentTranslations[language].mobileNav;
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "#home", label: t.navItems.home, icon: Home },
    { href: "#calculator", label: t.navItems.calculator, icon: Calculator },
    { href: "#certificates", label: t.navItems.certificates, icon: Shield },
    { href: "/terms", label: t.navItems.terms, icon: FileText },
    { href: "/privacy", label: t.navItems.privacy, icon: FileText },
    { href: "#contact", label: t.navItems.contact, icon: Mail },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[60] w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-black" />
        ) : (
          <Menu className="h-6 w-6 text-black" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[50]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] z-[55] transform transition-transform duration-300 ease-in-out border-l border-yellow-500/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-yellow-500">
              {t.menuTitle}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {t.menuSubtitle}
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500 transition-all group"
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-white/10">
            <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
              {t.getStarted}
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              {t.joinInvestors}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
