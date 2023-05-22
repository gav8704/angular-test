import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotesActions } from '../state/notes.actions';
import { Note } from '../models';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RoutingService } from '../../../services/routing.service';

export const notesStorageKey = 'noteList';

@Injectable()
export class NotesService {
  constructor(
    private readonly store: Store,
    private readonly localStorageService: LocalStorageService,
    private readonly routingService: RoutingService
  ) {}

  /** Getting note list from local storage */
  getNotes(): void {
    const notesStr = localStorage.getItem(notesStorageKey);
    if (!notesStr) {
      return;
    }

    const notes = JSON.parse(notesStr);
    this.store.dispatch(
      NotesActions.retrievedNotes({ noteList: notes as Note[] })
    );
  }

  /** Adding the note */
  addNote(note: Note): void {
    this.localStorageService.addItem<Note>(notesStorageKey, note);
    this.store.dispatch(NotesActions.addNote({ note }));
    this.routingService.goToNoteEditor(note.id);
  }

  /** Updating the note */
  updateNote(note: Note): void {
    this.localStorageService.updateItem(notesStorageKey, note);
    this.store.dispatch(NotesActions.updateNote({ note }));
  }

  /** Removal the note */
  removeNote(noteId: Note['id']) {
    this.localStorageService.removeItem(noteId, notesStorageKey);
    this.store.dispatch(NotesActions.removeNote({ noteId }));
    this.routingService.goToNoteCreator();
  }
}
