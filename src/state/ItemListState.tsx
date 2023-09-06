import { atom } from "recoil"

export interface ItemInterface {
    title: string,
    date: string,
    id: number,
    check: boolean,
}

export const ItemListState = atom<Array<ItemInterface>>({
    key: "ItemListState",
    default: []
})