import { Action, createReducer, on } from "@ngrx/store";
import * as textNoteActions from "../action/notes.actions";
import { TextNote } from "../../models/textNote";
import { PicNote } from "../../models/picNote";

export const textNoteFeatureKey = "textNote";

export interface TextNoteState {
  textNotes?: TextNote[];
  picNotes?: PicNote[];
}

export const initialState: TextNoteState = {
  textNotes: [],
  picNotes: [],
};

export const noteReducer = createReducer(
  initialState,
  on(textNoteActions.addTextNote, (state: TextNoteState, { textNote }) => ({
    ...state,
    textNotes: [...(state.textNotes || []), textNote],
  })),
  on(textNoteActions.addPicNote, (state: TextNoteState, { picNote }) => ({
    ...state,
    picNotes: [...(state.picNotes || []), picNote],
  }))
);

export function reducer(state: TextNoteState | undefined, action: Action): any {
  return noteReducer(state, action);
}
