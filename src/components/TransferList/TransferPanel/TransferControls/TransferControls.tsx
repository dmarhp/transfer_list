import React, { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import { ControlButton, TransferControlWrapper, TrControlArrow } from './styles';
import leftIcon from '../../assets/forward-outline.svg';
import rightIcon from '../../assets/back-outline.svg';

interface ITransferControlsProps {
    isSelected: boolean
    toggleMoveChecked: () => void;
    toggleMoveAll: () => void;
}

const TransferControls = (props: ITransferControlsProps) => {
  const icon = props.isSelected ? leftIcon : rightIcon;

  const controlRRef = useRef(null);
  useRipple(controlRRef, { animationLength: 400 });

  const controlLRef = useRef(null);
  useRipple(controlLRef, { animationLength: 400 });

  const doubleArrow = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TrControlArrow src={icon} alt="arrow" />
      <TrControlArrow src={icon} alt="arrow" />
    </div>
  );

  const singleArrow = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TrControlArrow src={icon} alt="arrow" />
    </div>
  );

  const onRightButtonClick = () => {
    props.isSelected ? props.toggleMoveChecked() : props.toggleMoveAll();
  };

  const onLeftButtonClick = () => {
    props.isSelected ? props.toggleMoveAll() : props.toggleMoveChecked();
  };

  return (
    <TransferControlWrapper>
      <ControlButton ref={controlRRef} onClick={() => onLeftButtonClick()}>
        {props.isSelected ? doubleArrow() : singleArrow()}
      </ControlButton>
      <ControlButton ref={controlLRef} onClick={() => onRightButtonClick()}>
        {props.isSelected ? singleArrow() : doubleArrow()}
      </ControlButton>
    </TransferControlWrapper>
  );
};

export default TransferControls;
