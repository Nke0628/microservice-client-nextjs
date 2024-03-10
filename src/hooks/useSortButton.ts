import { SortOrder, nextSortOrderMap } from "@/types/sort-order";
import { useState } from "react";

/**
 * テーブルソート用のカスタムフック
 */
export const useSortButton = <T>() => {
  // 現在ソート順
  const [currentSortOrder, setCurrentSortOrder] = useState<SortOrder>(
    SortOrder.UN_SORT
  );

  // 現在ソートフィールド
  const [currentSortFiled, setCurrentSortField] = useState<T | undefined>(
    undefined
  );

  // ソート順取得（別項目クリックの場合、ソート順は最初から）
  const getSortOrderBySortField = (sortFiled: T): SortOrder => {
    return sortFiled === currentSortFiled
      ? currentSortOrder
      : SortOrder.UN_SORT;
  };

  // 次ソート順取得（別項目クリックの場合、ソート順はASCから）
  const getNextSortOrder = (sortField: T) => {
    if (sortField !== currentSortFiled) {
      return SortOrder.ASC;
    }
    return nextSortOrderMap[currentSortOrder];
  };

  // ソートボタンクリック
  const handleClickSortButton = (
    sortField: T,
    callback: (sortField: T, sortOrder: SortOrder) => void = () => {}
  ) => {
    setCurrentSortOrder(getNextSortOrder(sortField));
    setCurrentSortField(sortField);
    callback(sortField, getNextSortOrder(sortField));
  };

  return {
    getSortOrderBySortField,
    handleClickSortButton,
  };
};
