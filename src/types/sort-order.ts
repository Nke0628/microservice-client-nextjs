export const SortOrder = {
  UN_SORT: 1,
  ASC: 2,
  DESC: 3,
} as const;

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export const nextSortOrderMap: Record<SortOrder, SortOrder> = {
  [SortOrder.UN_SORT]: SortOrder.ASC,
  [SortOrder.ASC]: SortOrder.DESC,
  [SortOrder.DESC]: SortOrder.UN_SORT,
};
