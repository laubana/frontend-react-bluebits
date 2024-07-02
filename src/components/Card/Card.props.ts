import { ReactNode } from "react";

export interface CardProps {
  content: string;
  icon: ReactNode;
  onClick?: () => void;
  title: string;
}
