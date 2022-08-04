import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteViewComponent } from './note-view/note-view.component';
import { TextNoteComponent } from './textNote/text-note.component';
import { StoreModule } from '@ngrx/store';
import { textNoteFeatureKey, reducer } from '../store/reducer/notes.reducer';


@NgModule({
  declarations: [NoteViewComponent, TextNoteComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(textNoteFeatureKey, reducer),
  ],
  exports: [
    NoteViewComponent,
    TextNoteComponent
  ]
})
export class TextNoteModule {
}
