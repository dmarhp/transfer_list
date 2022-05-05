import styled from 'styled-components';

export const TrSearch = styled.input`
  font-size: 1rem;
  padding: 8px 8px 8px 40px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  width: calc(100% - 48px);

  &:focus {
    border-color: #444;
  }
`;

export const TrSearchWrapper = styled.div`
  position: relative;
  padding: 16px 0;
`;

export const TrSearchIcon = styled.img`
  width: 16px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
