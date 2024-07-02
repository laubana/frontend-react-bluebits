import { CSSProperties, ReactNode } from "react";

export type Variant = "body" | "titleLg" | "titleMd" | "titleSm";
export type Coloring = "black" | "blue" | "red" | "grey" | "orange" | "white";
export type Alignment = "left" | "center" | "right";

export interface TextProps {
  variant?: Variant;
  coloring?: Coloring;
  alignment?: Alignment;
  children: ReactNode;
  style?: CSSProperties;
}
