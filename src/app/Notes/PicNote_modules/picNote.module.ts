import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PicNoteViewComponent} from './note-view/note-view.component';
import {PicNoteComponent} from './picNote/pic-note.component';
import {StoreModule} from '@ngrx/store';
import {textNoteFeatureKey, reducer} from '../store/reducer/notes.reducer';


@NgModule({
  declarations: [PicNoteViewComponent, PicNoteComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(textNoteFeatureKey, reducer),
  ],
  exports: [
    PicNoteViewComponent,
    PicNoteComponent
  ]
})
export class PicNoteModule {
}
