import React, { useEffect, useState } from 'react';
import { GroupedItems, GroupItem, ItemType } from '../interfaces';
import { groupItems } from '../utils';
import { TrPanelDataScroll, TrPanelDataWrapper, TrPanelWrapper } from './styles';
import TransferPanelGroup from './TransferPanelGroup/TransferPanelGroup';
import TransferControls from './TransferControls/TransferControls';
import TransferSearch from './TransferSearch/TransferSearch';
import GroupListItem from './TransferPanelGroup/GroupListItem/GroupListItem';

interface ITransferPanelProps {
    data: ItemType[];
    isSelected: boolean;
    title: string;
    selectionColor: string;
    toggleMoveAll: () => void;
    toggleMoveChecked: (ids: string[]) => void;
}

const TransferPanel = (props: ITransferPanelProps) => {
  const [items, setItems] = useState<GroupedItems>(groupItems(props.data));
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setItems(groupItems(props.data.filter((item) => item.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()))));
  }, [searchText]);

  useEffect(() => {
    setItems(groupItems(props.data));
  }, [props.data]);

  const onCheck = (id: string) => {
    if (checkedIds.find((item) => item === id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const moveChecked = () => {
    props.toggleMoveChecked(checkedIds);
    setCheckedIds([]);
  };

  return (
    <TrPanelWrapper>
      <TrPanelDataWrapper>
        <span style={{ margin: 5, fontSize: '1rem' }}>{`${props.title}`}</span>

        <TransferSearch
          value={searchText}
          onChange={(text) => setSearchText(text)}
        />

        <TrPanelDataScroll>
          {items?.grouped.length > 0
            ? (
              <>
                {items?.grouped.map((group: GroupItem) => (
                  <TransferPanelGroup
                    items={group.items}
                    groupName={group.name}
                    selectionColor={props.selectionColor}
                    checkedIds={checkedIds}
                    onCheck={(id) => onCheck(id)}
                    toggleMoveSingleItem={(id) => props.toggleMoveChecked([id])}
                    key={group.name}
                  />
                ))}

                <TransferPanelGroup
                  items={items.ungrouped}
                  groupName="Ungrouped"
                  selectionColor={props.selectionColor}
                  checkedIds={checkedIds}
                  onCheck={(id) => onCheck(id)}
                  toggleMoveSingleItem={(id) => props.toggleMoveChecked([id])}
                />
              </>
            )
            : (
              <>
                {items?.ungrouped.map((item) => (
                  <GroupListItem
                    name={item.name}
                    selectionColor={props.selectionColor}
                    isChecked={!!checkedIds.find((id) => id === item.id)}
                    onCheck={() => onCheck(item.id)}
                    onDoubleClick={() => props.toggleMoveChecked([item.id])}
                    key={item.id}
                  />
                ))}
              </>
            )}
        </TrPanelDataScroll>
      </TrPanelDataWrapper>

      <TransferControls
        isSelected={props.isSelected}
        toggleMoveChecked={() => moveChecked()}
        toggleMoveAll={() => props.toggleMoveAll()}
      />

    </TrPanelWrapper>

  );
};

export default TransferPanel;
