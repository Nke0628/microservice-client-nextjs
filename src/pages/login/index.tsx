import LoginForm from "@/components/organisms/Login/LoginForm";
import { Box, Flex } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <LoginForm></LoginForm>
    </Flex>
  );
}
