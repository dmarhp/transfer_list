import React, { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import { TrGroupListItemBtn } from './styles';

interface IGroupItemProps {
    name: string;
    selectionColor: string
    isChecked: boolean;
    onCheck: () => void;
    onDoubleClick: () => void;
}

const GroupListItem = (props: IGroupItemProps) => {
  const listItemRef = useRef(null);
  useRipple(listItemRef, { animationLength: 400 });

  return (
    <div style={{ backgroundColor: '#bdbdbd', borderRadius: 4 }}>
      <TrGroupListItemBtn
        ref={listItemRef}
        onClick={() => props.onCheck()}
        onDoubleClick={() => props.onDoubleClick()}
        color={props.isChecked ? props.selectionColor : '#ffffff'}
        isSelected={props.isChecked}
      >
        {props.name}
      </TrGroupListItemBtn>
    </div>
  );
};

export default GroupListItem;
