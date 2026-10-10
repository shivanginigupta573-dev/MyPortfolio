"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { siteConfig, siteSubtitle } from "@/data/site";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky/20 dark:border-dark-surface bg-canvas/90 dark:bg-dark-bg/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand Name */}
        <Link href="/" className="group flex flex-col focus:outline-none">
          <span className="font-display text-lg font-bold tracking-tight text-ink dark:text-dark-text group-hover:text-brand dark:group-hover:text-dark-accent transition-colors">
            {siteConfig.name}
          </span>
          <span className="font-sans text-xs text-ink/60 dark:text-dark-muted font-medium">
            {siteSubtitle}
          </span>
        </Link>

        {/* Desktop Links & Theme Switcher */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 font-sans text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? "text-brand dark:text-dark-accent font-semibold"
                      : "text-ink/80 dark:text-dark-muted hover:text-ink dark:hover:text-dark-text"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand dark:bg-dark-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sky/40 dark:border-dark-surface bg-ice/50 dark:bg-dark-surface text-ink dark:text-dark-text hover:border-brand dark:hover:border-dark-accent transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-ink" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-sky/30 dark:border-dark-surface bg-ice/50 dark:bg-dark-surface text-ink dark:text-dark-text"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-ink" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-sky/30 dark:border-dark-surface text-ink dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-sky/20 dark:border-dark-surface bg-canvas dark:bg-dark-bg px-4 py-4 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 font-sans text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-ice dark:bg-dark-surface text-brand dark:text-dark-accent font-bold"
                        : "text-ink/80 dark:text-dark-muted hover:bg-ice/50 dark:hover:bg-dark-surface/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
