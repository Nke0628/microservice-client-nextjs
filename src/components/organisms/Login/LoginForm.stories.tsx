import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import LoginFormPresenter from "./LoginFormPresenter";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginFormType } from "./LoginForm.schema";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Projects/Organism/LoginForm",
  component: LoginFormPresenter,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginFormPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      action("submit")(data);
    },
  },
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
        <LoginFormPresenter {...args}></LoginFormPresenter>
      </FormProvider>
    );
  },
};
