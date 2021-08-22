/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeasurements = /* GraphQL */ `
  query GetMeasurements($id: ID!) {
    getMeasurements(id: $id) {
      id
      clientID
      measurementType
      measurementValue
      createdAt
      updatedAt
    }
  }
`;
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $id: ID
    $filter: ModelmeasurementsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMeasurements(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        clientID
        measurementType
        measurementValue
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessagesToDoctor = /* GraphQL */ `
  query GetMessagesToDoctor($id: ID!) {
    getMessagesToDoctor(id: $id) {
      id
      message
      doctorName
      patientName
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const listMessagesToDoctors = /* GraphQL */ `
  query ListMessagesToDoctors(
    $id: ID
    $filter: ModelmessagesToDoctorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessagesToDoctors(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        message
        doctorName
        patientName
        deviceID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessagesToPatient = /* GraphQL */ `
  query GetMessagesToPatient($id: ID!) {
    getMessagesToPatient(id: $id) {
      id
      message
      patientName
      doctorName
      createdAt
      updatedAt
    }
  }
`;
export const listMessagesToPatients = /* GraphQL */ `
  query ListMessagesToPatients(
    $id: ID
    $filter: ModelmessagesToPatientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessagesToPatients(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        message
        patientName
        doctorName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
