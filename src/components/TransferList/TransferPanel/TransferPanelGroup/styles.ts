import styled from 'styled-components';

export const GroupWrapper = styled.div<{ grouped?: boolean }>`
  //background-color: red;
  display: flex;
  flex-direction: column;
  //row-gap: 4px;
  //padding: 4px;
  border-radius: 4px;
 border: 1px solid #bdbdbd;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const GroupTitle = styled.div<{isOpened : boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  //min-height: 32px;
  //border-radius: 4px;
  background-color: ${({ isOpened }) => (isOpened ? '#eee' : '#bdbdbd')};
  ${({ isOpened }) => isOpened
      && ('transition: all ease-in-out 0.3s;')}
`;

export const GroupItems = styled.div<{ isOpened: boolean }>`
  //${({ isOpened }) => (isOpened ? 'flex' : 'none')}
  max-height: 0;
  overflow: hidden;
  transition: all linear 0.3s;
  text-align: left;
  display: flex;
  flex-direction: column;
  //margin: ${({ isOpened }) => (isOpened ? '4px 12px' : '0 12px')};
  //row-gap: 4px;
  //padding-bottom: 4px;
  opacity: 1;
  
    ${({ isOpened }) => isOpened
      && ('max-height: 100%; transition: all linear 0.05s;')}
`;
