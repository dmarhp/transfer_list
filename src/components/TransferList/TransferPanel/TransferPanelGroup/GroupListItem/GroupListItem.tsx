import React, { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import { GroupListItemBtn } from './styles';

interface IGroupItemProps {
    name: string;
    isChecked: boolean;
    onCheck: () => void;
}

const GroupListItem = ({
  name, isChecked, onCheck,
}: IGroupItemProps) => {
  const buttonRef = useRef(null);
  useRipple(buttonRef, { animationLength: 400 });

  return (
    <div style={{ backgroundColor: '#bdbdbd', borderRadius: 4 }}>
      <GroupListItemBtn
        ref={buttonRef}
        onClick={() => onCheck()}
        color={isChecked ? '#bdbdbd' : '#ffffff'}
        isSelected={isChecked}
      >
        {name}
      </GroupListItemBtn>
    </div>
  );
};

export default GroupListItem;
