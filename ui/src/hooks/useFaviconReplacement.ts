import { useEffect, useMemo } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

// Replace the link with id #favicon dynamically whether the user browser preference is set to dark mode or not
export const useFaviconReplacement = () => {
  const isBrowserDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const url = useMemo(
    () => `butterfly-${isBrowserDarkMode ? "dark" : "light"}.png`,
    [isBrowserDarkMode]
  );

  useEffect(() => {
    const faviconLink = window.document.createElement("link");

    faviconLink.id = "favicon";
    faviconLink.rel = "icon";
    faviconLink.type = "image/png";
    faviconLink.href = url;

    window.document.getElementById("favicon")?.replaceWith(faviconLink);
  }, [url]);

  return null;
};
