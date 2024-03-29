import { createContext, FC, ReactNode, useContext } from "react";

export type LoginUser = {
  id: number;
  name: string;
};

const LoginUserContext = createContext<LoginUser>({
  id: 0,
  name: "",
});

type LoginUserProviderProps = {
  children: ReactNode;
};

export const LoginUserProvider: FC<LoginUserProviderProps> = ({ children }) => {
  const loginUser: LoginUser = {
    id: 1,
    name: "青空太郎",
  };
  return (
    <LoginUserContext.Provider value={loginUser}>
      {children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
