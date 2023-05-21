import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './features/notes/notes.module';

import { notesReducer } from './features/notes/state/notes.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule,
    StoreModule.forRoot({ notes: notesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
