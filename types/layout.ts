import { ReactNode } from "react";

export interface LayoutTypes {
    title?: string;
    keywords?: string;
    description?: string;
    children: ReactNode;
  }