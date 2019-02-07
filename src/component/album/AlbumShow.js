import React from "react";
import { ImageField, List, ReferenceField } from "react-admin";
// import AddCommentButton from "./AddCommentButton";

const AlbumShow = props => (
  <List {...props}>
    {/* <TabbedShowLayout> */}
    {/* <Tab label="Summary"> */}
    <ReferenceField
      addLabel={false}
      reference="photos"
      target="albumId"
      source="id"
    >
      <ImageField source="thumbnailUrl" title="title" />
    </ReferenceField>
    {/* </Tab> */}
    {/* </TabbedShowLayout> */}
  </List>
);

export default AlbumShow;
