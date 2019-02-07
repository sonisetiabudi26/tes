import React from "react";
import {
  Create,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required
} from "react-admin";
import { parse } from "query-string";

// const today = new Date();

const CommentCreate = props => {
  // Read the post_id from the location which is injected by React Router and passed to our component by react-admin automatically
  const { postId: post_id_string } = parse(props.location.search);

  // ra-data-fakerest uses integers as identifiers, we need to parse the querystring
  // We also must ensure we can still create a new comment without having a post_id
  // from the url by returning an empty string if post_id isn't specified
  const postId = post_id_string ? parseInt(post_id_string, 10) : "";

  const redirect = postId ? `/posts/${postId}/show/comments` : "show";

  return (
    <Create {...props}>
      <SimpleForm defaultValue={{ postId }} redirect={redirect}>
        <ReferenceInput
          source="postId"
          reference="posts"
          allowEmpty
          validate={required()}
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <LongTextInput source="body" />
      </SimpleForm>
    </Create>
  );
};

export default CommentCreate;
