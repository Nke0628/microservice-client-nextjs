import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import LoginFormPresenter from "./LoginFormPresenter";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginFormType } from "./LoginForm.schema";

const meta = {
  title: "Organism/LoginForm",
  component: LoginFormPresenter,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginFormPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<LoginFormType>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(LoginFormSchema),
    });
    return (
      <FormProvider {...methods}>
        <LoginFormPresenter onSubmit={() => {}}></LoginFormPresenter>
      </FormProvider>
    );
  },
};
