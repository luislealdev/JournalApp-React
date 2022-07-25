import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";

export const HomePage = () => {

  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/*When Nothing */}
      {/* <NothingSelectedView/> */}
      <NoteView />
      <IconButton
        onClick={onNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
