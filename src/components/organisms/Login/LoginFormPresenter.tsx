import { useFormContext } from "react-hook-form";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { LoginFormType } from "./LoginForm.schema";

type Props = {
  onSubmit: (data: LoginFormType) => void;
};

const LoginFormPresenter: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<LoginFormType>();

  return (
    <VStack spacing="5">
      <Heading size="lg">Sky System</Heading>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="5">
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">アカウント</FormLabel>
              <Input id="email" {...register("email")} minW="500px" />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor="password">パスワード</FormLabel>
              <Input
                id="password"
                type="password"
                {...register("password")}
                minW="500px"
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              ログイン
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default LoginFormPresenter;
