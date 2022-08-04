import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { TextNoteModule } from "./Notes/TextNote_modules/textNote.module";
import { PicNoteModule } from "./Notes/PicNote_modules/picNote.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TextNoteModule,
    PicNoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
