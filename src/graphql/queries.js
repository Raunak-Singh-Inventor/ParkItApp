/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
      id
      device_data {
        messageTime
        gsr
        mic
        accelZero
        accelOne
        accelTwo
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelmessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_data {
          messageTime
          gsr
          mic
          accelZero
          accelOne
          accelTwo
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
