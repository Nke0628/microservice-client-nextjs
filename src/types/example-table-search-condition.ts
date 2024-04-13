import { SortOrder } from "./sort-order";

export const ExampleTableSortFiled = {
  POSITION_LAYER: "position_layer",
  CHAR_NUM: "char_num",
} as const;

export type ExampleTableSortFiled =
  (typeof ExampleTableSortFiled)[keyof typeof ExampleTableSortFiled];

export type ExampleTableSearchCondition = {
  keyWord: string;
  sortOrder: SortOrder;
  sortField: ExampleTableSortFiled;
};
