import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TextNote } from '../../models/textNote';
import { addTextNote } from '../../store/action/notes.actions';
import { TextNoteState } from '../../store/reducer/notes.reducer';



@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss']
})

export class TextNoteComponent {

  constructor(private store: Store<TextNoteState>) {
  }

  addTextNote(description: string): void {
    const textNote = new TextNote();
    textNote.description = description;
    this.store.dispatch(addTextNote(textNote));
  }
}
