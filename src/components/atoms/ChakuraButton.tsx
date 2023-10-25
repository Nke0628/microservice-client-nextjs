import { Button, ButtonProps } from "@chakra-ui/react";

type Props = {
  sampleProps?: boolean;
} & ButtonProps;

const ChakuraButton: React.FC<Props> = ({ sampleProps, ...rest }) => {
  return <Button {...rest}>{rest.children}</Button>;
};

export default ChakuraButton;
