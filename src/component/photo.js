import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EmailField,
  UrlField
} from "react-admin";

export const PhotoList = props => (
  <List {...props}>
    {/* <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
    </Datagrid> */}
  </List>
);
