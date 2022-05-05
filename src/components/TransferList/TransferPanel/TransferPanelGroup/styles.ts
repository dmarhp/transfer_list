import styled from 'styled-components';

export const TrGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const TrGroupTitle = styled.div<{ isOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  background-color: ${({ isOpened }) => (isOpened ? '#f5f5f5' : '#e0e0e0')};
  transition: all linear 0.1s;
`;

export const TrGroupItems = styled.div<{ isOpened: boolean }>`
  height: ${({ isOpened }) => (isOpened ? '100%' : '0')};
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const TrGroupOpenIcon = styled.img<{ isOpened: boolean }>`
  width: 16px;
  transform: rotate(0);
  ${({ isOpened }) => isOpened && 'transform: rotate(180deg);'};
  transition: transform 0.2s linear;
`;
