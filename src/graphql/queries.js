/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!, $insertMessageTime: String!) {
    getMessages(id: $id, insertMessageTime: $insertMessageTime) {
      id
      insertMessageTime
      device_data {
        measurementType
        measurementValue
        clientID
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $id: ID
    $insertMessageTime: ModelStringKeyConditionInput
    $filter: ModelmessagesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      id: $id
      insertMessageTime: $insertMessageTime
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        insertMessageTime
        device_data {
          measurementType
          measurementValue
          clientID
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
