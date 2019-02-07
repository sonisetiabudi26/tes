import React from "react";
import {
  Datagrid,
  ShowButton,
  ReferenceManyField,
  RichTextField,
  Show,
  EditButton,
  ReferenceField,
  Tab,
  TabbedShowLayout,
  TextField
} from "react-admin";
import AddCommentButton from "./AddCommentButton";

const PostShow = props => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Summary">
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
      </Tab>
      <Tab label="Body" path="body">
        <RichTextField
          source="body"
          stripTags={false}
          label=""
          addLabel={false}
        />
      </Tab>
      <Tab label="Comments">
        <ReferenceManyField
          addLabel={false}
          reference="comments"
          target="postId"
          sort={{ field: "body", order: "DESC" }}
        >
          <Datagrid>
            <TextField source="body" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddCommentButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default PostShow;
