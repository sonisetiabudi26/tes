import React from "react";
import {
  Datagrid,
  List,
  ReferenceField,
  Responsive,
  ShowButton,
  SimpleList,
  TextField
} from "react-admin";

const CommentList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.body}
          tertiaryText={record =>
            new Date(record.created_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="body" />
          <ReferenceField resource="comments" source="postId" reference="posts">
            <TextField source="title" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export default CommentList;
