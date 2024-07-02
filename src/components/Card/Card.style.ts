import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid rgba(245, 245, 245, 1);
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5fr 8.5fr;
  padding: 16px;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
