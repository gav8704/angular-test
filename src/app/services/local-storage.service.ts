import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getDataByKey(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /** Only for array */
  addItem<T>(key: string, value: T): void {
    const data = this.getDataByKey(key);

    if (!Array.isArray(data)) {
      return;
    }

    data.push(value);
    this.setItem(key, data);
  }

  /** Only for array */
  removeItem<T extends { id: string }>(itemId: T['id'], key: string): void {
    const data = this.getDataByKey(key);

    if (!Array.isArray(data)) {
      return;
    }

    const newData = (data as T[]).filter((item) => item.id !== itemId);
    localStorage.setItem(key, JSON.stringify(newData));
  }
}
