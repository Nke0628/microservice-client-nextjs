import storage from "@/utils/storage";
import React, { FC, ReactNode, useContext, useEffect, useState } from "react";

type AuthInfo = {
  isAuthenticated: boolean;
  updateIsAuthenticated: (isAuthenticated: boolean) => void;
  user: {
    name: string;
  };
};

type Props = {
  children: ReactNode;
};

const AuthContext = React.createContext<AuthInfo>({
  isAuthenticated: false,
  updateIsAuthenticated: () => {},
  user: {
    name: "",
  },
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const updateIsAuthenticated = (isAuthenticated: boolean) => {
    setIsAuthenticated(isAuthenticated);
  };

  const value: AuthInfo = {
    isAuthenticated: isAuthenticated,
    updateIsAuthenticated,
    user: {
      name: "Jhon",
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
