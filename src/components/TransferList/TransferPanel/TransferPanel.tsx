import React, { useEffect, useState } from 'react';
import { GroupedItems, GroupItem, ItemType } from '../interfaces';
import { groupItems } from '../utils';
import { TransferPanelData, TransferPanelWrapper } from './styles';
import TransferPanelGroup from './TransferPanelGroup/TransferPanelGroup';
import TransferControls from './TransferControls/TransferControls';
import TransferSearch from './TransferSearch/TransferSearch';
import GroupListItem from './TransferPanelGroup/GroupListItem/GroupListItem';

interface ITransferPanelProps {
    data: ItemType[];
    isSelected: boolean;
    title: string;
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
    <TransferPanelWrapper>
      <span style={{ margin: 5 }}>{`${props.title}`}</span>

      <TransferSearch
        value={searchText}
        onChange={(text) => setSearchText(text)}
      />

      <TransferPanelData>
        {items?.grouped.length > 0
          ? (
            <>
              {items?.grouped.map((group: GroupItem) => (
                <TransferPanelGroup
                  items={group.items}
                  groupName={group.name}
                  checkedIds={checkedIds}
                  onCheck={(id) => onCheck(id)}
                  key={group.name}
                />
              ))}

              <TransferPanelGroup
                items={items.ungrouped}
                groupName="Ungrouped"
                checkedIds={checkedIds}
                onCheck={(id) => onCheck(id)}
              />
            </>
          )
          : (
            <>
              {items?.ungrouped.map((item) => (
                <GroupListItem
                  name={item.name}
                  isChecked={!!checkedIds.find((id) => id === item.id)}
                  onCheck={() => onCheck(item.id)}
                  key={item.id}
                />
              ))}
            </>
          )}
      </TransferPanelData>

      <TransferControls
        isSelected={props.isSelected}
        toggleMoveChecked={() => moveChecked()}
        toggleMoveAll={() => props.toggleMoveAll()}
      />
    </TransferPanelWrapper>
  );
};

export default TransferPanel;
