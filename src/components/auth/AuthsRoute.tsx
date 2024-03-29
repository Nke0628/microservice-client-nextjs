import Router from "next/router";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const AuthRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = true;
  // privatePageに認証時以外にアクセスした場合はログイン画面に遷移させる
  useEffect(() => {
    if (!isAuthenticated) {
      Router.push("/login");
    }
  }, [isAuthenticated]);
  return children;
};

export default AuthRoute;
