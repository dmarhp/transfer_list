import { GroupItem, ItemType } from './interfaces';

export const sortItems = (items: any[]) => items.sort((a, b) => a.name.localeCompare(b.name));

export const groupItems = (items: ItemType[]) => {
  const groupedItems: ItemType[] = [];
  const ungrouped: ItemType[] = [];
  let grouped: GroupItem[] = [];

  items.forEach((item) => {
    !item.group ? ungrouped.push(item) : groupedItems.push(item);
  });

  if (groupedItems.length > 0) {
    groupedItems.forEach((item) => {
      const indexOfGroup = grouped?.findIndex((itm) => itm.name === item.group);
      if (indexOfGroup >= 0) {
        grouped[indexOfGroup].items.push(item);
      } else {
        grouped.push({ name: item.group || '', items: [item] });
      }
    });

    grouped = grouped.map((item) => ({ name: item.name, items: sortItems(item.items) }));
  }

  return { grouped, ungrouped };
};
