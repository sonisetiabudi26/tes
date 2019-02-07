import React from "react";
// import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";

import { Admin, Resource, fetchUtils } from "react-admin";
import { UserList } from "./component/users";
import post from "./component/posts";
import album from "./component/album";
import comments from "./component/comments";
import ReactDOM from "react-dom";

import "./index.css";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(
  "http://jsonplaceholder.typicode.com",
  httpClient
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" {...post} />
    <Resource name="comments" {...comments} />
    <Resource name="albums" {...album} />
  </Admin>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
