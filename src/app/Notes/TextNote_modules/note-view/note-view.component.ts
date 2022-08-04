import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TextNote } from "../../models/textNote";
import { select, Store } from "@ngrx/store";
import { selectTextNotes } from "../../store/selector/notes.selectors";
import { TextNoteState } from "../../store/reducer/notes.reducer";

@Component({
  selector: "app-note-view",
  templateUrl: "./note-view.component.html",
  styleUrls: ["./note-view.component.css"],
})
export class NoteViewComponent {
  textNotes$: Observable<TextNote[] >;

  constructor(private store: Store<TextNoteState>) {
    this.textNotes$ = <Observable<TextNote[]>>this.store.pipe(select(selectTextNotes));
  }
}
