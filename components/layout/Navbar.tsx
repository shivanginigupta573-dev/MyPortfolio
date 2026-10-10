"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const dropdownItems = [
  { name: "About Me", href: "/about" },
  { name: "Experience", href: "/about#experience" },
  { name: "Skills", href: "/about#skills" },
  { name: "Resume", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = NAV_LINKS.filter((link) => link.name !== "Ask Portfolio" && link.name !== "Contact");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky/20 bg-canvas/90 text-ink transition-colors duration-200 dark:border-[#1E2A3A] dark:bg-[#0B1220]/90 dark:text-dark-text backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center focus:outline-none">
          <span className="font-display text-[2rem] leading-none tracking-tight text-ink transition-colors dark:text-dark-text group-hover:text-brand dark:group-hover:text-dark-accent">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center justify-center md:flex md:flex-1 md:justify-center">
          <nav className="flex items-center gap-2 rounded-full border border-sky/25 bg-white/10 px-4 py-2 text-sm text-ink/80 shadow-sm dark:border-[#24314B] dark:bg-[#111C2E]/80 dark:text-dark-muted">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              if (link.name === "About") {
                return (
                  <div key={link.href} className="relative">
                    <button
                      type="button"
                      onClick={() => setAboutOpen((value) => !value)}
                      onBlur={() => setTimeout(() => setAboutOpen(false), 120)}
                      className={`relative flex items-center gap-1 rounded-full px-3 py-1.5 font-medium transition-colors ${
                        isActive
                          ? "text-brand dark:text-dark-accent"
                          : "text-ink/80 hover:text-ink dark:text-dark-muted dark:hover:text-dark-text"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 rounded-2xl border border-sky/25 bg-white/95 p-2 shadow-lg dark:border-[#2A3C5C] dark:bg-[#0F172B]/95"
                        >
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setAboutOpen(false)}
                              className="block rounded-xl px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-ice hover:text-ink dark:text-dark-muted dark:hover:bg-[#172338] dark:hover:text-dark-text"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3 py-1.5 font-medium transition-colors ${
                    isActive
                      ? "text-brand dark:text-dark-accent"
                      : "text-ink/80 hover:text-ink dark:text-dark-muted dark:hover:text-dark-text"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute inset-x-1 -bottom-1 h-[2px] rounded-full bg-brand dark:bg-dark-accent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/ask"
            className="rounded-full border border-brand/40 bg-white/60 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:bg-ice dark:border-[#3C6FB8] dark:bg-[#101C2D] dark:text-dark-text dark:hover:border-dark-accent"
          >
            Ask Shivbot
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-16 items-center rounded-full border border-sky/40 bg-ice/70 p-1 text-ink shadow-inner transition-colors dark:border-[#2A3C5C] dark:bg-[#101C2D]"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform dark:bg-[#1C2941] ${
                theme === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? <Moon className="h-4 w-4 text-[#60A5FA]" /> : <Sun className="h-4 w-4 text-[#F59E0B]" />}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-14 items-center rounded-full border border-sky/40 bg-ice/70 p-1 text-ink dark:border-[#2A3C5C] dark:bg-[#101C2D] dark:text-dark-text"
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform dark:bg-[#1C2941] ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? <Moon className="h-3.5 w-3.5 text-[#60A5FA]" /> : <Sun className="h-3.5 w-3.5 text-[#F59E0B]" />}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sky/30 text-ink dark:border-[#2A3C5C] dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-sky/20 bg-canvas px-4 py-4 md:hidden dark:border-[#1E2A3A] dark:bg-[#0B1220]"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-ice text-brand dark:bg-[#172338] dark:text-dark-accent"
                      : "text-ink/80 hover:bg-ice/60 dark:text-dark-muted dark:hover:bg-[#172338]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-sky/20 pt-3 dark:border-[#1E2A3A]">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-dark-muted">About</div>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-ice/60 dark:text-dark-muted dark:hover:bg-[#172338]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/ask"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl border border-brand/40 bg-ice/60 px-3 py-2 text-center text-sm font-medium text-ink dark:border-[#3C6FB8] dark:bg-[#101C2D] dark:text-dark-text"
              >
                Ask Shivbot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
