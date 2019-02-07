import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  ShowButton
} from "react-admin";

const AlbumList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export default AlbumList;
