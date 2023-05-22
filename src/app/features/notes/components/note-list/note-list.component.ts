import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFilteredAndSortedNotes,
  selectNotes,
} from '../../state/notes.selectors';
import { RoutingService } from '../../../../services/routing.service';
import { Note } from '../../models';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  noteList$ = this.store.select(selectFilteredAndSortedNotes);

  constructor(
    private readonly store: Store,
    private readonly routingService: RoutingService
  ) {}

  editNote(noteId: Note['id']) {
    this.routingService.goToNoteEditor(noteId);
  }
}