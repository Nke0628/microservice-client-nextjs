import { Box, Flex, Text } from "@chakra-ui/react";

export interface SegmentControlOption {
  value: string;
  label: string;
}

export interface SegmentControlProps {
  options: SegmentControlOption[];
  value: string;
  onClickOption: (value: string) => void;
}

export const SegmentControl: React.FC<SegmentControlProps> = ({
  options,
  value,
  onClickOption,
}) => {
  return (
    <Flex>
      {options.map((option, index) => (
        <Box
          key={option.value}
          bg={value === option.value ? "blue.500" : "gray.200"}
          color={value === option.value ? "white" : "gray.600"}
          px={4}
          py={2}
          borderLeftRadius={index === 0 ? "md" : 0}
          borderRightRadius={index === options.length - 1 ? "md" : 0}
          cursor="pointer"
          onClick={() => onClickOption(option.value)}
          _hover={{ bg: value === option.value ? "blue.600" : "gray.300" }}
        >
          <Text fontWeight={value === option.value ? "bold" : "normal"}>
            {option.label}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
