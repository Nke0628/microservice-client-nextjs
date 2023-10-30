import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LoginFormPresenter from "./LoginFormPresenter";
import { useAuth } from "@/hooks/auth";
import Router from "next/router";

export const LoginFormSchema = z.object({
  email: z.string().min(1, "アカウントを入力してください"),
  password: z.string().min(1, "パスワードを入力してください"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

const LoginForm: React.FC = () => {
  const { updateIsAuthenticated } = useAuth();
  const handleSubmitLogin = (data: LoginFormType) => {
    updateIsAuthenticated(true);
    Router.push("/sample");
  };

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
