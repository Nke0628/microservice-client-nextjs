import { SortOrder } from "./sort-order";

export const ExampleTableSortFiled = {
  POSITION_LAYER: 1,
  CHAR_NUM: 2,
} as const;

export type ExampleTableSortFiled =
  (typeof ExampleTableSortFiled)[keyof typeof ExampleTableSortFiled];

export type ExampleTableSearchCondition = {
  keyWord: string;
  sortOrder: SortOrder;
  sortField: ExampleTableSortFiled;
};
