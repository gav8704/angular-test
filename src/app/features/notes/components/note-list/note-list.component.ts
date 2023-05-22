import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilteredAndSortedNotes } from '../../state/notes.selectors';
import { RoutingService } from '../../../../services/routing.service';
import { Note } from '../../models';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListComponent {
  noteList$ = this.store.select(selectFilteredAndSortedNotes);

  constructor(
    private readonly store: Store,
    private readonly routingService: RoutingService,
    private readonly notesService: NotesService
  ) {}

  handleEditNote(noteId: Note['id']): void {
    this.routingService.goToNoteEditor(noteId);
  }

  handleRemoveNote(noteId: Note['id']): void {
    this.notesService.removeNote(noteId);
  }
}
