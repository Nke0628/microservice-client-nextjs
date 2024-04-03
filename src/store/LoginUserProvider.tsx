import { graphql } from "@/gql/gql";
import { createContext, FC, ReactNode, useContext } from "react";
import { useQuery } from "urql";

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

const LOGIN_USER_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query LoginUserQuery($ids: [Float!]!, $userType: [UserType!]!) {
    fetchUsersByIds(ids: $ids, userType: $userType) {
      id
      name
    }
  }
`);

export const LoginUserProvider: FC<LoginUserProviderProps> = ({ children }) => {
  const [{ data, error }] = useQuery({
    query: LOGIN_USER_QUERY_DOCUMENT,
    variables: {
      ids: [1],
      userType: [],
    },
  });

  if (error) {
    throw new Error("ログインユーザの情報を取得できませんでした");
  }

  const loginUser: LoginUser = {
    id: Number(data?.fetchUsersByIds[0].id) ?? 0,
    name: data?.fetchUsersByIds[0].name ?? "",
  };
  return (
    <LoginUserContext.Provider value={loginUser}>
      {children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
