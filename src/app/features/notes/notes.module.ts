import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NotesFilterComponent } from './components/notes-filter/notes-filter.component';
import { NotesDisplayComponent } from './pages/notes-display/notes-display.component';
import { NoteCardComponent } from './components/note-card/note-card.component';

@NgModule({
  declarations: [
    NoteEditorComponent,
    NotesFilterComponent,
    NotesDisplayComponent,
    NoteCardComponent,
  ],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
