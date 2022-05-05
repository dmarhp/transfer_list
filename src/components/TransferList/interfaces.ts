export interface ItemType {
    name: string;
    id: string;
    group?: string;
}

export interface GroupItem {
    name: string;
    items: ItemType[];
}

export interface GroupedItems {
    grouped: GroupItem[];
    ungrouped: ItemType[]
}
