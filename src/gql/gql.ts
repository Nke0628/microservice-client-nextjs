/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query FetchUserBySearchCondition(\n      $keyword: String!\n      $limit: Float!\n      $offset: Float!\n      $sortField: String!\n      $sortOrder: Float!\n    ) {\n      fetchUsersBySearchCondition(\n        keyword: $keyword\n        limit: $limit\n        offset: $offset\n        sortField: $sortField\n        sortOrder: $sortOrder\n      ) {\n        id\n        name\n        department {\n          id\n        }\n      }\n    }\n  ": types.FetchUserBySearchConditionDocument,
    "\n  fragment UserItem on User {\n    name\n    department {\n      id\n    }\n  }\n": types.UserItemFragmentDoc,
    "\n    query ModalFetchQuery($ids: [Float!]!, $userType: [UserType!]!) {\n      fetchUsersByIds(ids: $ids, userType: $userType) {\n        id\n        name\n      }\n    }\n  ": types.ModalFetchQueryDocument,
    "\n  query pdfQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n": types.PdfQueryDocument,
    "\n  query ExampleQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n": types.ExampleQueryDocument,
    "\n  query CsvExportQuery {\n    csvExport {\n      csv\n    }\n  }\n": types.CsvExportQueryDocument,
    "\n  query LoginUserQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      name\n    }\n  }\n": types.LoginUserQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserBySearchCondition(\n      $keyword: String!\n      $limit: Float!\n      $offset: Float!\n      $sortField: String!\n      $sortOrder: Float!\n    ) {\n      fetchUsersBySearchCondition(\n        keyword: $keyword\n        limit: $limit\n        offset: $offset\n        sortField: $sortField\n        sortOrder: $sortOrder\n      ) {\n        id\n        name\n        department {\n          id\n        }\n      }\n    }\n  "): (typeof documents)["\n    query FetchUserBySearchCondition(\n      $keyword: String!\n      $limit: Float!\n      $offset: Float!\n      $sortField: String!\n      $sortOrder: Float!\n    ) {\n      fetchUsersBySearchCondition(\n        keyword: $keyword\n        limit: $limit\n        offset: $offset\n        sortField: $sortField\n        sortOrder: $sortOrder\n      ) {\n        id\n        name\n        department {\n          id\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserItem on User {\n    name\n    department {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment UserItem on User {\n    name\n    department {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ModalFetchQuery($ids: [Float!]!, $userType: [UserType!]!) {\n      fetchUsersByIds(ids: $ids, userType: $userType) {\n        id\n        name\n      }\n    }\n  "): (typeof documents)["\n    query ModalFetchQuery($ids: [Float!]!, $userType: [UserType!]!) {\n      fetchUsersByIds(ids: $ids, userType: $userType) {\n        id\n        name\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query pdfQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n"): (typeof documents)["\n  query pdfQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ExampleQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n"): (typeof documents)["\n  query ExampleQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      userType\n      ...UserItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CsvExportQuery {\n    csvExport {\n      csv\n    }\n  }\n"): (typeof documents)["\n  query CsvExportQuery {\n    csvExport {\n      csv\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginUserQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query LoginUserQuery($ids: [Float!]!, $userType: [UserType!]!) {\n    fetchUsersByIds(ids: $ids, userType: $userType) {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;