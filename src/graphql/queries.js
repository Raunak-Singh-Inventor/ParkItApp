/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeasurements = /* GraphQL */ `
  query GetMeasurements($id: ID!) {
    getMeasurements(id: $id) {
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
        measurementHour
        measurementMinute
        measurementSecond
        measurementType
        measurementValue
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
