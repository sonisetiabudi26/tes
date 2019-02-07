import jsonServerProvider from "ra-data-json-server";
const disableFakeFetchRequestsLogs = true;

export default jsonServerProvider(
  "http://jsonplaceholder.typicode.com",
  disableFakeFetchRequestsLogs
);
