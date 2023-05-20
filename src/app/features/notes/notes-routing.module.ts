import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesDisplayComponent } from './pages/notes-display/notes-display.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
