/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Binary data */
  Binary: { input: any; output: any; }
};

export type CsvExport = {
  __typename?: 'CsvExport';
  csv: Scalars['Binary']['output'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MulritTerm = {
  __typename?: 'MulritTerm';
  businessTermEndDate: Scalars['String']['output'];
  businessTermName: Scalars['String']['output'];
  businessTermStartDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCurrentTerm: Scalars['Boolean']['output'];
  multiTermEndDate: Scalars['String']['output'];
  multiTermStartDate: Scalars['String']['output'];
};

export type MultiEvaluation = {
  __typename?: 'MultiEvaluation';
  goodComment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  improvementComment: Scalars['String']['output'];
  multiTermId: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  targetUser: User;
  targetUserId: Scalars['Float']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type MultiEvaluationQuery = {
  __typename?: 'MultiEvaluationQuery';
  createdAt: Scalars['String']['output'];
  goodComment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  improvementComment: Scalars['String']['output'];
  multiTermId: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  targetUser: User;
  targetUserId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveReportSetting: ReportSetting;
  submitMultiEvaluation: MultiEvaluation;
};


export type MutationSaveReportSettingArgs = {
  input: SaveReportSettingInput;
};


export type MutationSubmitMultiEvaluationArgs = {
  input: SubmitMultiEvaluationInput;
};

export type Query = {
  __typename?: 'Query';
  csvExport: CsvExport;
  fetchDepartmentByIds: Array<Department>;
  fetchUsersByIds: Array<User>;
  fetchUsersBySearchCondition: Array<User>;
  findMultiEvaluationById?: Maybe<MultiEvaluationQuery>;
  multiTerms: Array<MulritTerm>;
  myEvaluatingMultiEvaluations: Array<MultiEvaluation>;
  reportSetting: ReportSetting;
  searchMyEvaluatingMultiEvaluations: SearchMultiEvaluation;
};


export type QueryFetchDepartmentByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryFetchUsersByIdsArgs = {
  ids: Array<Scalars['Float']['input']>;
  userType: Array<UserType>;
};


export type QueryFetchUsersBySearchConditionArgs = {
  keyword: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
  sortField: Scalars['String']['input'];
  sortOrder: Scalars['Float']['input'];
};


export type QueryFindMultiEvaluationByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryMultiTermsArgs = {
  orederBy: Scalars['Boolean']['input'];
  take: Scalars['Float']['input'];
};


export type QueryMyEvaluatingMultiEvaluationsArgs = {
  termId: Scalars['Float']['input'];
};


export type QueryReportSettingArgs = {
  termId: Scalars['Float']['input'];
};


export type QuerySearchMyEvaluatingMultiEvaluationsArgs = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};

export type ReportSetting = {
  __typename?: 'ReportSetting';
  reportSettingDetails: Array<ReportSettingDetail>;
  reportSettingId: Scalars['ID']['output'];
  saveUser: User;
  saveUserId: Scalars['Float']['output'];
  savedAt: Scalars['String']['output'];
};

export type ReportSettingDetail = {
  __typename?: 'ReportSettingDetail';
  charaNum?: Maybe<Scalars['Float']['output']>;
  inputFlg: Scalars['Boolean']['output'];
  positionLayerName: Scalars['String']['output'];
  positionLayerType: Scalars['Float']['output'];
  reportSettingDetailId: Scalars['ID']['output'];
  theme: Scalars['String']['output'];
};

export type SaveReportSettingDetailInput = {
  charaNum?: InputMaybe<Scalars['Float']['input']>;
  inputFlg: Scalars['Boolean']['input'];
  positionLayerType: Scalars['Float']['input'];
  theme: Scalars['String']['input'];
};

export type SaveReportSettingInput = {
  reportSettingDetail: Array<SaveReportSettingDetailInput>;
  termId: Scalars['Float']['input'];
};

export type SearchMultiEvaluation = {
  __typename?: 'SearchMultiEvaluation';
  multiEvaluation: Array<MultiEvaluation>;
  totalCount: Scalars['Float']['output'];
};

export type SubmitMultiEvaluationInput = {
  goodComment: Scalars['String']['input'];
  improvementComment: Scalars['String']['input'];
  multiTermId: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
  targetUserId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  department?: Maybe<Department>;
  departmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userType: Array<UserType>;
};

/** The supported colors. */
export type UserType =
  /** EMPLOYEE */
  | 'EMPLOYEE'
  /** PARTNER */
  | 'PARTNER';

export type FetchUserBySearchConditionQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
  sortField: Scalars['String']['input'];
  sortOrder: Scalars['Float']['input'];
}>;


export type FetchUserBySearchConditionQuery = { __typename?: 'Query', fetchUsersBySearchCondition: Array<{ __typename?: 'User', id: string, name: string, department?: { __typename?: 'Department', id: string } | null }> };

export type UserItemFragment = { __typename?: 'User', name: string, department?: { __typename?: 'Department', id: string } | null } & { ' $fragmentName'?: 'UserItemFragment' };

export type ModalFetchQueryQueryVariables = Exact<{
  ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
  userType: Array<UserType> | UserType;
}>;


export type ModalFetchQueryQuery = { __typename?: 'Query', fetchUsersByIds: Array<{ __typename?: 'User', id: string, name: string }> };

export type PdfQueryQueryVariables = Exact<{
  ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
  userType: Array<UserType> | UserType;
}>;


export type PdfQueryQuery = { __typename?: 'Query', fetchUsersByIds: Array<(
    { __typename?: 'User', id: string, userType: Array<UserType> }
    & { ' $fragmentRefs'?: { 'UserItemFragment': UserItemFragment } }
  )> };

export type ExampleQueryQueryVariables = Exact<{
  ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
  userType: Array<UserType> | UserType;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', fetchUsersByIds: Array<(
    { __typename?: 'User', id: string, userType: Array<UserType> }
    & { ' $fragmentRefs'?: { 'UserItemFragment': UserItemFragment } }
  )> };

export type CsvExportQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CsvExportQueryQuery = { __typename?: 'Query', csvExport: { __typename?: 'CsvExport', csv: any } };

export type LoginUserQueryQueryVariables = Exact<{
  ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
  userType: Array<UserType> | UserType;
}>;


export type LoginUserQueryQuery = { __typename?: 'Query', fetchUsersByIds: Array<{ __typename?: 'User', id: string, name: string }> };

export const UserItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserItemFragment, unknown>;
export const FetchUserBySearchConditionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserBySearchCondition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUsersBySearchCondition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortField"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUserBySearchConditionQuery, FetchUserBySearchConditionQueryVariables>;
export const ModalFetchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ModalFetchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUsersByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ModalFetchQueryQuery, ModalFetchQueryQueryVariables>;
export const PdfQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pdfQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUsersByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PdfQueryQuery, PdfQueryQueryVariables>;
export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUsersByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const CsvExportQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CsvExportQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"csvExport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"csv"}}]}}]}}]} as unknown as DocumentNode<CsvExportQueryQuery, CsvExportQueryQueryVariables>;
export const LoginUserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginUserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserType"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUsersByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<LoginUserQueryQuery, LoginUserQueryQueryVariables>;