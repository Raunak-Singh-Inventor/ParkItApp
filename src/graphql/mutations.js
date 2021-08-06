/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeasurements = /* GraphQL */ `
  mutation CreateMeasurements(
    $input: CreateMeasurementsInput!
    $condition: ModelmeasurementsConditionInput
  ) {
    createMeasurements(input: $input, condition: $condition) {
      id
      clientID
      measurementHour
      measurementMinute
      measurementSecond
      measurementType
      measurementValue
      createdAt
      updatedAt
    }
  }
`;
export const updateMeasurements = /* GraphQL */ `
  mutation UpdateMeasurements(
    $input: UpdateMeasurementsInput!
    $condition: ModelmeasurementsConditionInput
  ) {
    updateMeasurements(input: $input, condition: $condition) {
      id
      clientID
      measurementHour
      measurementMinute
      measurementSecond
      measurementType
      measurementValue
      createdAt
      updatedAt
    }
  }
`;
export const deleteMeasurements = /* GraphQL */ `
  mutation DeleteMeasurements(
    $input: DeleteMeasurementsInput!
    $condition: ModelmeasurementsConditionInput
  ) {
    deleteMeasurements(input: $input, condition: $condition) {
      id
      clientID
      measurementHour
      measurementMinute
      measurementSecond
      measurementType
      measurementValue
      createdAt
      updatedAt
    }
  }
`;
