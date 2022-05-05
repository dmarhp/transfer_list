import React from 'react';
import { TrSearch, TrSearchIcon, TrSearchWrapper } from './styles';
import icon from '../../assets/search-outline.svg';

interface ITransferSearchProps{
    value: string;
    onChange: (text: string)=>void;
}

const TransferSearch = ({ value, onChange }: ITransferSearchProps) => (
  <TrSearchWrapper>
    <TrSearchIcon src={icon} />
    <TrSearch
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
  </TrSearchWrapper>
);

export default TransferSearch;
