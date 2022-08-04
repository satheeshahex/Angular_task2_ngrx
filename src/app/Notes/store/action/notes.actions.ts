import { createAction, props } from "@ngrx/store";
import { TextNote } from "../../models/textNote";

import { PicNote } from "../../models/picNote";

export const addTextNote = createAction(
  "[TextNote] Add TextNote",
  (textNote: TextNote) => ({ textNote })
);

export const addPicNote = createAction(
  "[PicNote] Add PicNote",
  (picNote: PicNote) => ({ picNote })
);
