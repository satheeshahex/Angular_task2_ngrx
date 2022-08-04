import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { PicNote } from "../../models/picNote";
import { addPicNote, addTextNote } from "../../store/action/notes.actions";
import { TextNoteState } from "../../store/reducer/notes.reducer";

@Component({
  selector: "app-pic-note",
  templateUrl: "./pic-note.component.html",
  styleUrls: ["./pic-note.component.css"],
})
export class PicNoteComponent {
  imageSrc: string = "";

  constructor(private store: Store<TextNoteState>) {}

  addTextNote(description: string, title: string): void {
    const textNote = new PicNote();

    textNote.description = description;
    textNote.title = title;
    textNote.image = this.imageSrc;
    this.store.dispatch(addPicNote(textNote));
  }

  handleInputChange(e:any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e:any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }
}
