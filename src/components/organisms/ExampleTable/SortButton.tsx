import { TriangleDownIcon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SortOrder = {
  UN_SORT: 1,
  ASC: 2,
  DESC: 3,
} as const;

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export const nextSortMap: Record<SortOrder, SortOrder> = {
  [SortOrder.UN_SORT]: SortOrder.ASC,
  [SortOrder.ASC]: SortOrder.DESC,
  [SortOrder.DESC]: SortOrder.UN_SORT,
};

type SortButtonProps = {
  sortOrder: SortOrder;
  onClickSortButton: () => void;
};

export const SortButton: React.FC<SortButtonProps> = ({
  sortOrder,
  onClickSortButton,
}) => {
  const sortMap: Record<SortOrder, ReactNode> = {
    [SortOrder.UN_SORT]: <UpDownIcon />,
    [SortOrder.ASC]: <TriangleUpIcon />,
    [SortOrder.DESC]: <TriangleDownIcon />,
  };

  const handleClickSortButton = () => {
    onClickSortButton();
  };
  return (
    <>
      <Box cursor="pointer" onClick={handleClickSortButton}>
        {sortMap[sortOrder]}
      </Box>
    </>
  );
};
