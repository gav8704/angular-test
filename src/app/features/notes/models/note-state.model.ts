import { Note } from './note.model';

export interface NoteState {
  entities: ReadonlyArray<Note>;
  searchValue: string | null;
  sortBy: SortType;
}

export type SortType = 'desc' | 'asc';
