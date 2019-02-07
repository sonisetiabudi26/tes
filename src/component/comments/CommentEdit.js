import React from "react";
import { Edit, LongTextInput, SimpleForm, required } from "react-admin";
import { parse } from "query-string";
import PostReferenceInput from "./PostReferenceInput";

const CommentEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <PostReferenceInput
          source="postId"
          reference="posts"
          allowEmpty
          validate={required()}
          perPage={10000}
        />

        <LongTextInput source="body" />
      </SimpleForm>
    </Edit>
  );
};

export default CommentEdit;
