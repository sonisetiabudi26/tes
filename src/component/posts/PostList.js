import { withStyles } from "@material-ui/core/styles";
import React from "react";
import {
  Datagrid,
  List,
  Responsive,
  ShowButton,
  ReferenceField,
  SimpleList,
  TextField
} from "react-admin";

const styles = theme => ({
  title: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

const PostList = withStyles(styles)(({ classes, ...props }) => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList linkType="show" primaryText={record => record.title} />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" cellClassName={classes.title} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
));

export default PostList;
