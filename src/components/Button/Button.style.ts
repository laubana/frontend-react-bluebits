import styled from "@emotion/styled";

import { Sizing, Coloring } from "./Button.props";

const fontSizes: Record<Sizing, string> = {
  medium: `
        font-size: 16px;
    `,
};

const paddingSizes: Record<Sizing, string> = {
  medium: `
        padding: 6px 12px;
    `,
};

const colorings: Record<Coloring, string> = {
  blue: `        
    background-color: #4D81E7;
    border: 0;
    box-shadow: 0 4px 10px 0 rgba(76, 144, 239, 0.35); 
    `,
  transparent: `
    background-color: #FFFFFF;
    border: 1px solid #4D81E7;
  `,
};

export const Button = styled.button<{
  sizing: Sizing;
  coloring: Coloring;
  block?: boolean;
}>`
  ${({ block }) => block && "display: block; width: 100%;"}
  ${({ coloring }) => colorings[coloring]};
  ${({ sizing: size }) => paddingSizes[size]};
  ${({ sizing: size }) => fontSizes[size]};
  align-items: center;
  border-radius: 69px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  white-space: nowrap;
  overflow: hidden;
`;
