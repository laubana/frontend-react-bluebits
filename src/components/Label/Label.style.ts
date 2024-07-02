import styled from "@emotion/styled";

import { Coloring } from "./Label.props";

const colorings: Record<Coloring, string> = {
  red: `        
        background-color: rgba(234, 84, 85, 0.15);
    `,
};

export const Container = styled.div<{
  coloring: Coloring;
}>`
  border-radius: 100px;
  border: 0;
  ${({ coloring }) => colorings[coloring]};
  padding: 3px 10px;
  white-space: nowrap;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
