import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.savedMessage = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.savedMessage = "";
    },
    updatedNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.savedMessage = `"${action.payload.title}" saved correctly`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.isSaving = false;
      if (state.active.imagesUrls) {
        state.active.imagesUrls = [
          ...state.active.imagesUrls,
          ...action.payload,
        ];
        return;
      }
      state.active.imagesUrls = [...action.payload];
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.savedMessage = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updatedNote,
  deleteNoteById,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
