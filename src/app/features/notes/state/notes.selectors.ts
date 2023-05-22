import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Note, NoteState } from '../models';
import { sortByDate } from '../../../helpers';

// const defVal: Note[] = [
//   {
//     id: '1',
//     title: 'title - 1',
//     description: 'description - 1',
//     date: 'Mon May 22 2023 00:59:37 GMT+0300 (Москва, стандартное время)',
//   },
//   {
//     id: '2',
//     title: 'title - 2',
//     description: 'description - 2',
//     date: 'Mon May 22 2023 00:59:51 GMT+0300 (Москва, стандартное время)',
//   },
// ];

// localStorage.setItem('noteList', JSON.stringify(defVal));

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
    const trimmedSearchValue = searchValue?.trim();

    // Filtering by search value
    const filteredBySearchValueNoteList = trimmedSearchValue
      ? noteList.filter(
          (note) =>
            note.title.includes(trimmedSearchValue) ||
            note.description.includes(trimmedSearchValue)
        )
      : [...noteList];

    // Sorting by sort type (asc or desc)
    const sortedByDateNoteList = filteredBySearchValueNoteList.sort((a, b) =>
      sortByDate(new Date(a.date), new Date(b.date), sortType)
    );

    return sortedByDateNoteList;
  }
);
