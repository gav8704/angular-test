import { SortType } from '../features/notes/models';

/**
 * Sorting by date depends on sort type
 */
export const sortByDate = (a: Date, b: Date, sortType: SortType) => {
  return sortType === 'desc'
    ? b.getTime() - a.getTime()
    : a.getTime() - b.getTime();
};
