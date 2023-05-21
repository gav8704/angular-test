import { SortType } from '../features/notes/models';

/**
 * Sorting by date, where arguments are date string like
 * Sun May 21 2023 22:06:15 GMT+0300 (Москва, стандартное время)
 */
export const sortByDate = (a: Date, b: Date, sortType: SortType) => {
  return sortType === 'asc'
    ? b.getTime() - a.getTime()
    : a.getTime() - b.getTime();
};
