import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesDisplayComponent } from './pages/notes-display/notes-display.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NotesToolbarComponent } from './components/notes-toolbar/notes-toolbar.component';
import { NoteCreatorComponent } from './pages/note-creator/note-creator.component';
import { NoteEditorComponent } from './pages/note-editor/note-editor.component';

import { ButtonModule } from '../../components/button/button.module';
import { CardModule } from '../../components/card/card.module';

import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    NotesDisplayComponent,
    NoteListComponent,
    NotesToolbarComponent,
    NoteCreatorComponent,
    NoteEditorComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
  ],
  providers: [NotesService],
})
export class NotesModule {}
