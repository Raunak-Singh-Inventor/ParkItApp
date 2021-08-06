/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelmessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
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
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelmessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
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
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelmessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
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
