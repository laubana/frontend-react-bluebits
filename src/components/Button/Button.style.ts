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
        box-shadow: 0 4px 10px 0 rgba(76, 144, 239, 0.35); 
        color:#FFFFFF;
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
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px;
  white-space: nowrap;
`;
