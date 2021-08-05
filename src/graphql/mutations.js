/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessageTable = /* GraphQL */ `
  mutation CreateMessageTable(
    $input: CreateMessageTableInput!
    $condition: ModelmessageTableConditionInput
  ) {
    createMessageTable(input: $input, condition: $condition) {
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
export const updateMessageTable = /* GraphQL */ `
  mutation UpdateMessageTable(
    $input: UpdateMessageTableInput!
    $condition: ModelmessageTableConditionInput
  ) {
    updateMessageTable(input: $input, condition: $condition) {
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
export const deleteMessageTable = /* GraphQL */ `
  mutation DeleteMessageTable(
    $input: DeleteMessageTableInput!
    $condition: ModelmessageTableConditionInput
  ) {
    deleteMessageTable(input: $input, condition: $condition) {
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
