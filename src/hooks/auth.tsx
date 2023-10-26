import storage from "@/utils/storage";
import React, { FC, ReactNode, useContext, useEffect } from "react";

type AuthInfo = {
  isAuthenticated: boolean;
  user: {
    name: string;
  };
};

type Props = {
  children: ReactNode;
};

const AuthContext = React.createContext<AuthInfo>({
  isAuthenticated: false,
  user: {
    name: "",
  },
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<Props> = ({ children }) => {
  // 認証ロジックを記載する
  const isAuthenticated = () => {
    return false;
  };

  const value: AuthInfo = {
    isAuthenticated: isAuthenticated(),
    user: {
      name: "Jhon",
    },
  };

  useEffect(() => {
    storage.setToken("sample");
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
