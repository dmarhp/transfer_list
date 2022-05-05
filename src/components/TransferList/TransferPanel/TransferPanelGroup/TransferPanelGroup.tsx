import React, { useRef, useState } from 'react';
import { useRipple } from 'react-use-ripple';
import { ItemType } from '../../interfaces';
import { GroupItems, GroupTitle, GroupWrapper } from './styles';
import GroupListItem from './GroupListItem/GroupListItem';

interface IItemGroupProps {
    items: ItemType[];
    groupName: string;
    checkedIds: string[];
    onCheck: (id: string) => void;
}

const TransferPanelGroup = (props: IItemGroupProps) => {
  const [isOpened, setIsOpened] = useState(true);

  const titleRef = useRef(null);
  useRipple(titleRef, { animationLength: 400 });

  return (
    <GroupWrapper>
      <GroupTitle
        ref={titleRef}
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div style={{ fontSize: '1em' }}>
          {props.groupName}
        </div>
        <span>
          {isOpened ? '-' : '+'}
        </span>
      </GroupTitle>

      <GroupItems isOpened={isOpened}>
        { props.items.map((item) => (
          <GroupListItem
            name={item.name}
            isChecked={!!props.checkedIds.find((id) => id === item.id)}
            onCheck={() => props.onCheck(item.id)}
            key={item.id}
          />
        ))}
      </GroupItems>
    </GroupWrapper>
  );
};

export default TransferPanelGroup;
