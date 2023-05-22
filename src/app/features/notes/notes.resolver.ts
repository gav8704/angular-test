import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { NotesService } from './services/notes.service';

/** Getting note list from local storage before displaying the component */
export const notesResolver: ResolveFn<void> = () => {
  inject(NotesService).getNotes();
};
