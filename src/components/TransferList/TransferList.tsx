import React, { useEffect, useState } from 'react';
import { ItemType } from './interfaces';
import { TrWrapper } from './styles';
import TransferPanel from './TransferPanel/TransferPanel';

interface ITransferListProps {
    selectedItems: ItemType[];
    allItems: ItemType[];
    selectedTitle: string;
    availableTitle: string;
}

const TransferList = (props: ITransferListProps) => {
  const [selected, setSelected] = useState<ItemType[]>(props.selectedItems);
  const [available, setAvailable] = useState<ItemType[]>([]);

  useEffect(() => {
    const selectedIds = props.selectedItems.map((item) => item.id);
    const result = props.allItems.filter((item) => !selectedIds.find((id) => id === item.id));
    setAvailable(result);
  }, []);

  const moveAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelected([]);
      setAvailable(props.allItems);
    } else {
      setSelected(props.allItems);
      setAvailable([]);
    }
  };

  const moveChecked = (ids: string[], isSelected: boolean) => {
    const first = isSelected ? selected : available;
    const firstResult = first.filter((item) => !ids.find((id) => id === item.id));
    const checkedItems = ids.map((id) => props.allItems.find((item) => item.id === id));

    if (isSelected) {
      setSelected(firstResult);
      // @ts-ignore
      setAvailable([...available, ...checkedItems]);
    } else {
      setAvailable(firstResult);
      // @ts-ignore
      setSelected([...selected, ...checkedItems]);
    }
  };

  return (
    <TrWrapper>
      <TransferPanel
        data={selected}
        isSelected
        title={props.selectedTitle}
        toggleMoveAll={() => moveAll(true)}
        toggleMoveChecked={(ids) => moveChecked(ids, true)}
      />

      <TransferPanel
        data={available}
        isSelected={false}
        title={props.availableTitle}
        toggleMoveAll={() => moveAll(false)}
        toggleMoveChecked={(ids) => moveChecked(ids, false)}
      />
    </TrWrapper>
  );
};

export default TransferList;
