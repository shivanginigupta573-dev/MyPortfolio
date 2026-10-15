
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Bot,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const dropdownItems = [
  { name: "About Me", href: "/about" },
  { name: "Experience", href: "/about#experience" },
  { name: "Skills", href: "/about#skills" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1XwWGLJ6R5EF8UY4AOOYaATAzymeIjhSF/view?usp=drive_link",
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isDark = mounted && theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on route changes and Escape.
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAboutOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navLinks = NAV_LINKS.filter(
    (link) =>
      link.name !== "Ask Portfolio" &&
      link.name !== "Contact"
  );

  const isAboutActive =
    pathname.startsWith("/about") || pathname === "/contact";

  const motionTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: "easeOut" as const };

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative flex h-10 w-[4.25rem] shrink-0 items-center rounded-full border border-sky-200/80 bg-white/70 p-1 shadow-sm transition-colors hover:border-blue-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-blue-500 dark:focus-visible:ring-offset-slate-950"
    >
      <span className="absolute left-[9px] text-amber-500 transition-transform duration-300 group-hover:rotate-12 dark:text-slate-400">
        <Sun size={15} strokeWidth={1.8} />
      </span>

      <span className="absolute right-[9px] text-blue-500 transition-transform duration-300 group-hover:-rotate-12 dark:text-blue-300">
        <Moon size={15} strokeWidth={1.8} />
      </span>

      <motion.span
        animate={{ x: isDark ? 34 : 0 }}
        transition={motionTransition}
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-sky-100 bg-white text-amber-500 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-blue-300"
      >
        {!mounted ? (
          <span className="h-3 w-3 rounded-full bg-sky-200" />
        ) : isDark ? (
          <Moon size={14} />
        ) : (
          <Sun size={14} />
        )}
      </motion.span>
    </button>
  );

  const askButton = (
    <Link
      href="/ask"
      className="group relative inline-flex h-10 shrink-0 items-center gap-2 overflow-hidden rounded-full border border-blue-200/80 bg-white/70 px-4 text-sm font-medium text-[#174A83] shadow-[0_2px_12px_rgba(59,130,246,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-[#EDF7FF] hover:shadow-[0_5px_18px_rgba(59,130,246,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-blue-900/80 dark:bg-slate-900/70 dark:text-blue-200 dark:hover:border-blue-600 dark:hover:bg-slate-800"
    >
      <Bot
        size={17}
        strokeWidth={1.7}
        className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
      />

      <span>Ask Shivbot</span>

      <Sparkles
        size={11}
        className="absolute right-2 top-1 text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      {/* Misty glass surface */}
      <div className="relative mx-auto max-w-7xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-[2rem] bg-gradient-to-r from-sky-100/50 via-white/70 to-blue-100/50 blur-xl dark:from-blue-950/20 dark:via-slate-900/40 dark:to-indigo-950/20"
        />

        <div className="relative rounded-[1.65rem] border border-white/80 bg-white/65 shadow-[0_8px_35px_rgba(62,113,166,0.07)] backdrop-blur-2xl transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-950/65 dark:shadow-[0_8px_35px_rgba(0,0,0,0.12)]">
          {/* Fine highlight along the top edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent dark:via-blue-500/30"
          />

          <div className="flex min-h-[72px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

            {/* Handwritten wordmark */}
            <Link
              href="/"
              aria-label="Shivangini Gupta — Home"
              className="group relative flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="relative font-display text-[1.55rem] leading-none tracking-tight text-[#173D69] transition-colors duration-300 group-hover:text-blue-600 sm:text-[1.8rem] dark:text-blue-100 dark:group-hover:text-blue-300">
                Shivangini

                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{
                    opacity: pathname === "/" ? 1 : 0,
                    scale: pathname === "/" ? 1 : 0.5,
                  }}
                  transition={motionTransition}
                  className="absolute -right-3 -top-2 text-[11px] text-blue-400"
                >
                  ✳
                </motion.span>
              </span>

              <span className="hidden text-[10px] text-blue-500/80 sm:inline dark:text-blue-300/70">
                / dev notes
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 md:flex"
            >
              {navLinks.map((link) => {
                const isAbout = link.name === "About";

                const isActive = isAbout
                  ? isAboutActive
                  : pathname === link.href ||
                    (link.href !== "/" &&
                      pathname.startsWith(`${link.href}/`));

                if (isAbout) {
                  return (
                    <div
                      key={link.href}
                      className="relative py-2"
                      onMouseEnter={() => setAboutOpen(true)}
                      onMouseLeave={() => setAboutOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={aboutOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setAboutOpen((open) => !open)
                        }
                        onFocus={() => {}}
                        className={`group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:px-4 lg:text-sm ${
                          isActive
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                        }`}
                      >
                        {link.name}

                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />

                        {isActive && (
                          <motion.span
                            layoutId="mist-active-indicator"
                            className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-300 to-blue-500"
                            transition={motionTransition}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {aboutOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: reduceMotion ? 0 : 8,
                              scale: reduceMotion ? 1 : 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: reduceMotion ? 0 : 5,
                              scale: 0.99,
                            }}
                            transition={motionTransition}
                            className="absolute right-0 top-full z-50 w-60 origin-top-right pt-2"
                          >
                            <div className="overflow-hidden rounded-2xl border border-sky-200/70 bg-white/95 p-2 shadow-[0_15px_45px_rgba(44,94,145,0.13)] backdrop-blur-2xl dark:border-slate-700 dark:bg-slate-950/95 dark:shadow-black/20">
                              <p className="px-3 pb-2 pt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-500/70 dark:text-blue-300/70">
                                A little more about me
                              </p>

                              {dropdownItems.map((item) => {
                                const external =
                                  item.href.startsWith("https://");

                                const active =
                                  !external &&
                                  pathname ===
                                    item.href.split("#")[0];

                                const content = (
                                  <span className="flex items-center justify-between gap-2">
                                    <span>{item.name}</span>
                                    {active && (
                                      <span
                                        aria-hidden="true"
                                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                                      />
                                    )}
                                  </span>
                                );

                                const className =
                                  "block rounded-xl px-3 py-2.5 text-[13px] text-slate-600 transition-colors hover:bg-sky-50 hover:text-blue-800 focus-visible:bg-sky-50 focus-visible:outline-none dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-200 dark:focus-visible:bg-slate-800";

                                return external ? (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                      setAboutOpen(false)
                                    }
                                    className={className}
                                  >
                                    {content}
                                  </a>
                                ) : (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() =>
                                      setAboutOpen(false)
                                    }
                                    className={className}
                                  >
                                    {content}
                                  </Link>
                                );
                              })}

                              <div className="mx-3 mt-2 border-t border-sky-100 dark:border-slate-800" />

                              <p className="px-3 py-2 text-[10px] text-slate-400 dark:text-slate-500">
                                Made with curiosity & tea
                              </p>
                            </div>
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
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:px-4 lg:text-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                    }`}
                  >
                    {link.name}

                    {isActive ? (
                      <motion.span
                        layoutId="mist-active-indicator"
                        className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-300 to-blue-500"
                        transition={motionTransition}
                      />
                    ) : (
                      <span className="absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-blue-300/80 transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              {themeToggle}
              {askButton}
            </div>

            {/* Mobile actions */}
            <div className="flex shrink-0 items-center gap-2 md:hidden">
              {themeToggle}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((open) => !open)
                }
                aria-label={
                  mobileMenuOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={mobileMenuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/80 bg-white/70 text-[#174A83] transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-blue-200 dark:hover:bg-slate-800"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileMenuOpen ? "close" : "menu"}
                    initial={{
                      opacity: 0,
                      rotate: reduceMotion ? 0 : -30,
                    }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{
                      opacity: 0,
                      rotate: reduceMotion ? 0 : 30,
                    }}
                    transition={{ duration: reduceMotion ? 0 : 0.15 }}
                    className="flex"
                  >
                    {mobileMenuOpen ? (
                      <X size={19} />
                    ) : (
                      <Menu size={19} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence initial={false}>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                  ease: "easeInOut",
                }}
                className="overflow-hidden md:hidden"
              >
                <nav
                  aria-label="Mobile navigation"
                  className="border-t border-sky-100/80 px-4 pb-4 pt-3 dark:border-slate-800 sm:px-6"
                >
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => {
                      const isAbout = link.name === "About";

                      const isActive = isAbout
                        ? isAboutActive
                        : pathname === link.href ||
                          (link.href !== "/" &&
                            pathname.startsWith(`${link.href}/`));

                      if (isAbout) {
                        return (
                          <div key={link.href}>
                            <button
                              type="button"
                              aria-expanded={aboutOpen}
                              onClick={() =>
                                setAboutOpen((open) => !open)
                              }
                              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                                isActive
                                  ? "bg-sky-50 text-blue-800 dark:bg-slate-800 dark:text-blue-200"
                                  : "text-slate-600 hover:bg-sky-50/80 dark:text-slate-300 dark:hover:bg-slate-800"
                              }`}
                            >
                              About
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  aboutOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {aboutOpen && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    height: 0,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    height: "auto",
                                  }}
                                  exit={{
                                    opacity: 0,
                                    height: 0,
                                  }}
                                  transition={{
                                    duration: reduceMotion ? 0 : 0.18,
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-3 mt-1 border-l border-sky-200 py-1 pl-3 dark:border-slate-700">
                                    {dropdownItems.map((item) => {
                                      const external =
                                        item.href.startsWith("https://");

                                      const className =
                                        "block rounded-lg px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-sky-50 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-200";

                                      return external ? (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={() => {
                                            setMobileMenuOpen(false);
                                            setAboutOpen(false);
                                          }}
                                          className={className}
                                        >
                                          {item.name}
                                          <span className="ml-2 text-xs opacity-50">
                                            ↗
                                          </span>
                                        </a>
                                      ) : (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() => {
                                            setMobileMenuOpen(false);
                                            setAboutOpen(false);
                                          }}
                                          className={className}
                                        >
                                          {item.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
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
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                            isActive
                              ? "bg-sky-50 text-blue-800 dark:bg-slate-800 dark:text-blue-200"
                              : "text-slate-600 hover:bg-sky-50/80 dark:text-slate-300 dark:hover:bg-slate-800"
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}

                    <div className="mt-2 border-t border-sky-100 pt-3 dark:border-slate-800">
                      <Link
                        href="/ask"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-blue-200/80 bg-sky-50/80 px-4 py-3 text-sm font-medium text-blue-800 transition-colors hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-blue-200 dark:hover:bg-slate-800"
                      >
                        <Bot size={17} />
                        Ask Shivbot
                        <Sparkles
                          size={13}
                          className="text-blue-400"
                        />
                      </Link>
                    </div>

                    <p className="pt-2 text-center text-[10px] tracking-wide text-slate-400 dark:text-slate-500">
                      a little corner of the internet
                    </p>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
