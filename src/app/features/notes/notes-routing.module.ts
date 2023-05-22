import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesDisplayComponent } from './pages/notes-display/notes-display.component';
import { NoteCreatorComponent } from './pages/note-creator/note-creator.component';
import { NoteEditorComponent } from './pages/note-editor/note-editor.component';
import { notesResolver } from './notes.resolver';

const routes: Routes = [
  {
    path: '',
    component: NotesDisplayComponent,
    resolve: {
      notes: notesResolver,
    },
    children: [
      {
        path: 'create',
        component: NoteCreatorComponent,
      },
      {
        path: 'edit/:noteId',
        component: NoteEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
