import LoginForm from "@/components/organisms/Login/LoginForm";
import { Box, Flex } from "@chakra-ui/react";
import { useQueryParam, StringParam, withDefault } from "use-query-params";

export default function LoginPage() {
  const [name, setName] = useQueryParam("name", withDefault(StringParam, ""));
  function handleButtonClick(event: any) {
    setName("url string");
  }

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <button onClick={handleButtonClick}>button</button>
      <LoginForm></LoginForm>
    </Flex>
  );
}
