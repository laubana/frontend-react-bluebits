export type Sizing = "medium";
export type Coloring = "blue";

export interface ButtonProps {
  block?: boolean;
  onClick?: () => void;
  text?: string;
  sizing?: Sizing;
  coloring?: Coloring;
}
