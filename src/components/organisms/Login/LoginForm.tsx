import { FormProvider } from "react-hook-form";
import LoginFormPresenter from "./LoginFormPresenter";
import { LoginFormSchema, LoginFormType } from "./LoginForm.schema";
import { useZodForm } from "@/libs/rfh";

const LoginForm: React.FC = () => {
  const handleSubmitLogin = (data: LoginFormType) => {
    console.log(data);
  };

  const methods = useZodForm<LoginFormType>(
    {
      defaultValues: {
        email: "",
        password: "",
      },
    },
    LoginFormSchema
  );
  return (
    <FormProvider {...methods}>
      <LoginFormPresenter onSubmit={handleSubmitLogin}></LoginFormPresenter>
    </FormProvider>
  );
};

export default LoginForm;
