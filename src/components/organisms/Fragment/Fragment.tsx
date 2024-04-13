import { FragmentType, useFragment } from "@/gql";
import { graphql } from "@/gql/gql";
import { UserItemFragment } from "@/gql/graphql";

const UserFragment = graphql(/* GraphQL */ `
  fragment UserItem on User {
    name
    department {
      id
    }
  }
`);

type FragmentProps = {
  query: FragmentType<typeof UserFragment>;
};

export const Fragment = (props: FragmentProps) => {
  const user = useFragment(UserFragment, props.query);
  return (
    <>
      {user.name}.{user.department?.id}
    </>
  );
};
