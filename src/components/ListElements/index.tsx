import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import ApiElements from "../../services/elements";
import { useFetchList } from "../../hooks/useFetchList";

interface IElement {
  id: string;
  name: string;
  avatar: string;
}

export const ListElements: React.FC = () => {
  const { entities: elements, isLoading } = useFetchList<IElement>({
    fetchDataFunction: ApiElements.getElements,
  });

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {elements.map((element, index) => (
          <React.Fragment key={element.id}>
            <ListItem>
              <Avatar src={element.avatar} sx={{ marginRight: 2 }} />
              <ListItemText primary={element.name} />
            </ListItem>
            {index < elements.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
