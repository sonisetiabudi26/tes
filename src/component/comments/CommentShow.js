import React from "react";
import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

const CommentShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="postId" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);

export default CommentShow;
