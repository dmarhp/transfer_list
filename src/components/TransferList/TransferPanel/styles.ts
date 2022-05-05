import styled from 'styled-components';

export const TransferPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const TransferSearch = styled.input`
  padding: 8px;

  outline: none;
  border-radius: 4px;
  border: 1px solid #c4c4c4;

  &:focus {
    border-color: #444;
  }
`;

export const TransferPanelData = styled.div`
  height: 400px;
  overflow-y: scroll;
  row-gap: 8px;
  margin: 16px 0;
    
`;
