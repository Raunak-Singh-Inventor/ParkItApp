/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessageTable = /* GraphQL */ `
  query GetMessageTable($id: ID!, $insertMessageTime: String!) {
    getMessageTable(id: $id, insertMessageTime: $insertMessageTime) {
      id
      insertMessageTime
      device_data {
        messageTime
        gsr
        mic
        accelZero
        accelOne
        accelTwo
        client_id
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessageTables = /* GraphQL */ `
  query ListMessageTables(
    $id: ID
    $insertMessageTime: ModelStringKeyConditionInput
    $filter: ModelmessageTableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessageTables(
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
          messageTime
          gsr
          mic
          accelZero
          accelOne
          accelTwo
          client_id
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
