import { createActionGroup, props } from '@ngrx/store';
import { Note, SortType } from '../models';

export const NotesActions = createActionGroup({
  source: 'Notes',
  events: {
    // Entities
    'Add Note': props<{ note: Note }>(),
    'Remove Note': props<{ noteId: string }>(),
    'Update Note': props<{ note: Note }>(),
    'Retrieved Notes': props<{ noteList: ReadonlyArray<Note> }>(),

    // Search value
    'Set Search Value': props<{ searchValue: string }>(),

    // Sort type
    'Set Sort Type': props<{ sortType: SortType }>(),
  },
});
