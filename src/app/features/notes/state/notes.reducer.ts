import { createReducer, on } from '@ngrx/store';
import { Note, NoteState } from '../models';
import { NotesActions } from './notes.actions';

export const initialState: NoteState = {
  entities: [],
  searchValue: null,
  sortBy: 'desc',
};

export const notesReducer = createReducer(
  initialState,

  // Entities
  on(NotesActions.addNote, (state, { note }) => ({
    ...state,
    entities: [...state.entities, note],
  })),
  on(NotesActions.removeNote, (state, { noteId }) => ({
    ...state,
    entities: state.entities.filter((note) => note.id !== noteId),
  })),
  on(NotesActions.updateNote, (state, { note }) => ({
    ...state,
    entities: state.entities.map((entity) => {
      if (entity.id === note.id) {
        return note;
      }

      return entity;
    }),
  })),
  on(NotesActions.retrievedNotes, (state, { noteList }) => ({
    ...state,
    entities: noteList,
  })),

  // Search value
  on(NotesActions.setSearchValue, (state, { searchValue }) => ({
    ...state,
    searchValue,
    entities: [...state.entities],
  })),

  // Sort type
  on(NotesActions.setSortType, (state, { sortType }) => ({
    ...state,
    entities: [...state.entities],
    sortType,
  }))
);
