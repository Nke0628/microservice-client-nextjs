import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginFormPresenter from "./LoginFormPresenter";
import { useAuth } from "@/hooks/auth";
import Router from "next/router";
import { LoginFormSchema, LoginFormType } from "./LoginForm.schema";

const LoginForm: React.FC = () => {
  const handleSubmitLogin = (data: LoginFormType) => {};

  const methods = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });
  return (
    <FormProvider {...methods}>
      <LoginFormPresenter onSubmit={handleSubmitLogin}></LoginFormPresenter>
    </FormProvider>
  );
};

export default LoginForm;
