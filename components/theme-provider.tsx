"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme, ...rest } = useNextTheme();

  const toggleTheme = React.useCallback(() => {
    const isDark =
      theme === "dark" || (theme === "system" && resolvedTheme === "dark");
    setTheme(isDark ? "light" : "dark");
  }, [theme, resolvedTheme, setTheme]);

  return {
    theme: (theme === "system" ? resolvedTheme : theme) ?? "light",
    toggleTheme,
    setTheme,
    resolvedTheme,
    ...rest,
  };
}