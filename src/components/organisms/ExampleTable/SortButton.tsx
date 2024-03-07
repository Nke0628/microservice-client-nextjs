import { SortOrder } from "@/types/sort-order";
import { TriangleDownIcon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type SortButtonProps = {
  sortOrder: SortOrder;
  onClickSortButton: () => void;
};

export const SortButton: React.FC<SortButtonProps> = ({
  sortOrder,
  onClickSortButton,
}) => {
  const sortIconMap: Record<SortOrder, ReactNode> = {
    [SortOrder.UN_SORT]: <UpDownIcon />,
    [SortOrder.ASC]: <TriangleUpIcon />,
    [SortOrder.DESC]: <TriangleDownIcon />,
  };

  return (
    <>
      <Box cursor="pointer" onClick={onClickSortButton}>
        {sortIconMap[sortOrder]}
      </Box>
    </>
  );
};
