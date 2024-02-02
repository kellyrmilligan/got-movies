"use client";

import { paths } from "@/schema";
import type { ReactNode } from "react";
import { createContext } from "react";

export const ConfigContext = createContext<
  paths["/3/configuration"]["get"]["responses"]["200"]["content"]["application/json"]
>({
  images: {
    base_url: "",
    secure_base_url: "",
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    still_sizes: [],
  },
  change_keys: [],
});

interface ConfigProviderProps {
  children: ReactNode;
  value: paths["/3/configuration"]["get"]["responses"]["200"]["content"]["application/json"];
}

export function ConfigProvider({ children, value }: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
