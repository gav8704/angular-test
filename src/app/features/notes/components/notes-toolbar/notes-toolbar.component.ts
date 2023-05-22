import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RoutingService } from '../../../../services/routing.service';
import { Store } from '@ngrx/store';
import { selectSearchValue } from '../../state/notes.selectors';
import { NotesActions } from '../../state/notes.actions';

@Component({
  selector: 'app-notes-toolbar',
  templateUrl: './notes-toolbar.component.html',
  styleUrls: ['./notes-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesToolbarComponent {
  searchValue$ = this.store.select(selectSearchValue);

  constructor(
    private readonly routingService: RoutingService,
    private readonly store: Store
  ) {}

  handleCreateNoteClick(): void {
    this.routingService.goToNoteCreator();
  }

  handleSearchInputChange(e: KeyboardEvent): void {
    const searchValue = (e.target as HTMLInputElement).value;
    this.store.dispatch(NotesActions.setSearchValue({ searchValue }));
  }
}
