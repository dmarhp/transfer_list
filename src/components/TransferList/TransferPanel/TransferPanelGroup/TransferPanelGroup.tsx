import React, { useRef, useState } from 'react';
import { useRipple } from 'react-use-ripple';
import { ItemType } from '../../interfaces';
import {
  TrGroupItems, TrGroupOpenIcon, TrGroupTitle, TrGroupWrapper,
} from './styles';
import GroupListItem from './GroupListItem/GroupListItem';
import arrow from '../../assets/down-outline.svg';

interface IItemGroupProps {
    items: ItemType[];
    groupName: string;
    checkedIds: string[];
    onCheck: (id: string) => void;
    toggleMoveSingleItem: (id: string) => void;
    selectionColor: string;
}

const TransferPanelGroup = (props: IItemGroupProps) => {
  const [isOpened, setIsOpened] = useState(true);

  const titleRef = useRef(null);
  useRipple(titleRef, { animationLength: 400 });

  return (
    <TrGroupWrapper>
      <TrGroupTitle
        ref={titleRef}
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div style={{ fontSize: '1em' }}>
          {props.groupName}
        </div>
        <TrGroupOpenIcon isOpened={isOpened} src={arrow} alt="arrow" />
      </TrGroupTitle>

      <TrGroupItems isOpened={isOpened}>
        { props.items.map((item) => (
          <GroupListItem
            name={item.name}
            selectionColor={props.selectionColor}
            isChecked={!!props.checkedIds.find((id) => id === item.id)}
            onCheck={() => props.onCheck(item.id)}
            onDoubleClick={() => props.toggleMoveSingleItem(item.id)}
            key={item.id}
          />
        ))}
      </TrGroupItems>
    </TrGroupWrapper>
  );
};

export default TransferPanelGroup;
