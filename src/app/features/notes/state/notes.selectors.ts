import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Note, NoteState } from '../models';
import { sortByDate } from '../../../helpers';

export const featureKey = 'notes';
export const selectNotes = createFeatureSelector<NoteState>(featureKey);

/** Note list */
export const selectNoteList = createSelector(
  selectNotes,
  (state) => state.entities
);

/** Search value */
export const selectSearchValue = createSelector(
  selectNotes,
  (state) => state.searchValue
);

/** Sort type */
export const selectSortType = createSelector(
  selectNotes,
  (state) => state.sortBy
);

/** Note list filtered by search value and sorted by date ascending or descending */
export const selectFilteredAndSortedNotes = createSelector(
  selectNoteList,
  selectSearchValue,
  selectSortType,
  (noteList, searchValue, sortType) => {
    // Filtering by search value
    const filteredBySearchValueNoteList = searchValue
      ? noteList.filter((note) => note.title.includes(searchValue))
      : [...noteList];

    // Sorting by sort type (asc or desc)
    const sortedByDateNoteList = filteredBySearchValueNoteList.sort((a, b) =>
      sortByDate(new Date(a.date), new Date(b.date), sortType)
    );

    return sortedByDateNoteList;
  }
);
