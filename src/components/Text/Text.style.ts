import styled from "@emotion/styled";

import { Alignment, Coloring, Variant } from "./Text.props";

const variants: Record<Variant, string> = {
  body: `
    font-size: 12px;
    font-weight: 400;
  `,
  titleLg: `
    font-size: 24px;
    font-weight: 700;
  `,
  titleMd: `
    font-size: 16px;
    font-weight: 600;
  `,
  titleSm: `
    font-size: 14px;
    font-weight: 600;
  `,
};

const colors: Record<Coloring, string> = {
  black: `
    color: #1D1D1D;
  `,
  blue: `
    color: #4D81E7;
  `,
  red: `
    color: #EA5455;
  `,
  grey: `
    color: #9397A5;
  `,
  orange: `
    color: #FF8C00;
  `,
  white: `
    color: #FFFFFF;
  `,
};

const alignments: Record<Alignment, string> = {
  left: `
        text-align: left;
    `,
  center: `
        text-align: center;
    `,
  right: `
        text-align: right;
    `,
};

export const Text = styled.div<{
  alignment: Alignment;
  coloring: Coloring;
  variant: Variant;
}>`
  font-family: "Roboto", sans-serif;
  ${({ alignment }) => alignments[alignment]}
  ${({ coloring }) => colors[coloring]}
  ${({ variant }) => variants[variant]}
`;
