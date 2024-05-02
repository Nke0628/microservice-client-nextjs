import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FormProvider,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

export const useZodForm = <
  InputFormType extends Record<string, any>,
  outputFormType extends Record<string, any> = Record<string, any>,
  ZodSchema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(
  props: Omit<UseFormProps<InputFormType>, "resolver"> & {
    defaultValues: InputFormType;
  },
  zodSchema: ZodSchema
): UseFormReturn<InputFormType, any, outputFormType> => {
  return useForm<InputFormType, any, outputFormType>({
    resolver: zodResolver(zodSchema),
    ...props,
  });
};

// type RhfProviderProps = {
//   children: ReactNode;
//   methods: UseFormReturn;
//   handleSubmit: SubmitHandler<FieldValues>;
// };

// export const RhfProvider: React.FC<RhfProviderProps> = ({
//   children,
//   methods,
//   handleSubmit,
// }) => {
//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
//     </FormProvider>
//   );
// };
