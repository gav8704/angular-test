import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotesActions } from '../state/notes.actions';
import { Note } from '../models';

export const notesStorageKey = 'noteList';

@Injectable()
export class NotesService {
  constructor(private store: Store) {}

  /** Getting note list from local storage */
  getNotes() {
    const notesStr = localStorage.getItem(notesStorageKey);
    if (!notesStr) {
      return;
    }

    const notes = JSON.parse(notesStr);
    this.store.dispatch(
      NotesActions.retrievedNotes({ noteList: notes as Note[] })
    );
  }
}
