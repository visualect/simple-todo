import { ITodoItem } from "./todoTypes";

export interface IAddItemAction {
  type: "addItem";
  newItem: ITodoItem;
}

export interface IDeleteItemAction {
  type: "deleteItem";
  id: string;
}

export interface IToggleItemAction {
  type: "toggleItem";
  id: string;
}

export type ACTIONTYPE =
  | { type: "toggleItem"; id: string }
  | { type: "addItem"; newItem: ITodoItem }
  | { type: "deleteItem"; id: string };
