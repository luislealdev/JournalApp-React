import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarNote = ({ title, body, id, date, imagesUrls }) => {

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 30 ? body.substring(0, 30) + "..." : body;
  }, [body])

  const dispatch = useDispatch();

  const onNoteClick = () => {
    dispatch(setActiveNote({id, title, body, date, imagesUrls}));
  }

  return (
    <ListItem disablePadding >
      <ListItemButton onClick={onNoteClick}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
