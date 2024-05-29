import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const TableOfContents = ({ contents }) => {
  return (
    <List>
      {contents.map((content, index) => (
        <ListItem button key={index}>
          <ListItemText primary={`Chapter ${index + 1}`} secondary={content} />
        </ListItem>
      ))}
    </List>
  );
};

export default TableOfContents;
