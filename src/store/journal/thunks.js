import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updatedNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    //dispatch
    //dispatch(newNote)
    //dispatch(activarNota)
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = () => {
  return async(dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const {active:note} = getState().journal;
    const noteToFirestore = {...note};
    delete noteToFirestore.id;

    const noteRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(noteRef, noteToFirestore, {merge: true});
    dispatch(updatedNote(note))
  }
};

export const startUploadingImage = (files) => {
  return async(dispatch) =>{
  dispatch(setSaving());
  
  await fileUpload(files[0]);
  }
}
