import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(1, "アカウントを入力してください"),
  password: z.string().min(1, "パスワードを入力してください"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
