"use client";

import { useEffect, useState } from "react";

export function Copyright() {
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    // Read the year in the browser so static deployments stay current without a rebuild.
    function updateYear() {
      setYear(new Intl.DateTimeFormat("tr-TR", { year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date()));
    }
    updateYear();
    window.addEventListener("pageshow", updateYear);
    document.addEventListener("visibilitychange", updateYear);
    return () => {
      window.removeEventListener("pageshow", updateYear);
      document.removeEventListener("visibilitychange", updateYear);
    };
  }, []);

  return <span>© {year && `${year} `}Tüm hakları saklıdır.</span>;
}
