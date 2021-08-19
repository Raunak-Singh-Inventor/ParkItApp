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
      measurementType
      measurementValue
      createdAt
      updatedAt
    }
  }
`;
export const createMessagesToDoctor = /* GraphQL */ `
  mutation CreateMessagesToDoctor(
    $input: CreateMessagesToDoctorInput!
    $condition: ModelmessagesToDoctorConditionInput
  ) {
    createMessagesToDoctor(input: $input, condition: $condition) {
      id
      message
      doctorName
      createdAt
      updatedAt
    }
  }
`;
export const updateMessagesToDoctor = /* GraphQL */ `
  mutation UpdateMessagesToDoctor(
    $input: UpdateMessagesToDoctorInput!
    $condition: ModelmessagesToDoctorConditionInput
  ) {
    updateMessagesToDoctor(input: $input, condition: $condition) {
      id
      message
      doctorName
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessagesToDoctor = /* GraphQL */ `
  mutation DeleteMessagesToDoctor(
    $input: DeleteMessagesToDoctorInput!
    $condition: ModelmessagesToDoctorConditionInput
  ) {
    deleteMessagesToDoctor(input: $input, condition: $condition) {
      id
      message
      doctorName
      createdAt
      updatedAt
    }
  }
`;
export const createMessagesToPatient = /* GraphQL */ `
  mutation CreateMessagesToPatient(
    $input: CreateMessagesToPatientInput!
    $condition: ModelmessagesToPatientConditionInput
  ) {
    createMessagesToPatient(input: $input, condition: $condition) {
      id
      message
      patientName
      createdAt
      updatedAt
    }
  }
`;
export const updateMessagesToPatient = /* GraphQL */ `
  mutation UpdateMessagesToPatient(
    $input: UpdateMessagesToPatientInput!
    $condition: ModelmessagesToPatientConditionInput
  ) {
    updateMessagesToPatient(input: $input, condition: $condition) {
      id
      message
      patientName
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessagesToPatient = /* GraphQL */ `
  mutation DeleteMessagesToPatient(
    $input: DeleteMessagesToPatientInput!
    $condition: ModelmessagesToPatientConditionInput
  ) {
    deleteMessagesToPatient(input: $input, condition: $condition) {
      id
      message
      patientName
      createdAt
      updatedAt
    }
  }
`;
