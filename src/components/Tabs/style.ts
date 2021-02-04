import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #1a1423;
  padding: 0 20px;
`;
export const TabButtonLabel = styled.p`
  font-size: 12px;
  color: #595364;
`;
export const TabButton = styled.button`
  text-align: center;
  width: 100%;
  background: transparent;
  border: none;
  &.active {
    ${TabButtonLabel} {
      color: #e43959;
    }
  }
`;
export const TabButtonIcon = styled.div`
  img {
    width: 20px;
  }
`;
