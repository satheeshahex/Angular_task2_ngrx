import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TextNote } from "../../models/textNote";
import { select, Store } from "@ngrx/store";
import { selectPicNotes } from "../../store/selector/notes.selectors";
import { TextNoteState } from "../../store/reducer/notes.reducer";

@Component({
  selector: "app-pic-note-view",
  templateUrl: "./note-view.component.html",
  styleUrls: ["./note-view.component.css"],
})
export class PicNoteViewComponent {
  picNotes$: Observable<TextNote[]>;

  constructor(private store: Store<TextNoteState>) {
    this.picNotes$ = <Observable<TextNote[]>>this.store.pipe(select(selectPicNotes));
  }
}
