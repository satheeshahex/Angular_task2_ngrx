import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromNote from "../reducer/notes.reducer";

export const selectTextNoteState =
  createFeatureSelector<fromNote.TextNoteState>(fromNote.textNoteFeatureKey);

export const selectTextNotes = createSelector(
  selectTextNoteState,
  (state: fromNote.TextNoteState) => state.textNotes
);

export const selectPicNotes = createSelector(
  selectTextNoteState,
  (state: fromNote.TextNoteState) => state.picNotes
);
