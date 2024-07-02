import { ReactNode } from "react";

export type Sizing = "medium";
export type Coloring = "blue" | "transparent";

export interface ButtonProps {
  block?: boolean;
  coloring?: Coloring;
  leftComponent?: ReactNode;
  onClick?: () => void;
  sizing?: Sizing;
  text?: string;
}
