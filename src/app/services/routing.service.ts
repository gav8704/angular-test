import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Note } from '../features/notes/models';

export const GlobalRoutes: { [key: string]: string } = {
  noteEditor: 'notes/edit',
  noteCreator: 'notes/create',
};

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private readonly router: Router) {}

  goToNoteEditor(noteId: Note['id']) {
    this.router.navigateByUrl(`${GlobalRoutes['noteEditor']}/${noteId}`);
  }

  goToNoteCreator() {
    this.router.navigateByUrl(GlobalRoutes['noteCreator']);
  }
}
