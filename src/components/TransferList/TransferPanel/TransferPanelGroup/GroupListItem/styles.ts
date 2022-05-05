import styled from 'styled-components';

export const TrGroupListItemBtn = styled.button<{isSelected: boolean}>`
  border: none;
  width: 100%;
  padding: 4px 16px;
  transition: all linear 0.1s;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  min-height: 32px;
  text-align: left;
  opacity: 1;
  background-color: ${({ isSelected }) => (isSelected ? '#64b5f6' : 'white')};
  font-size: 1em;

  &:hover {
    opacity: 0.7;
  }
`;
