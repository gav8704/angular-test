import { Component } from '@angular/core';
import { RoutingService } from '../../../../services/routing.service';

@Component({
  selector: 'app-notes-toolbar',
  templateUrl: './notes-toolbar.component.html',
  styleUrls: ['./notes-toolbar.component.scss'],
})
export class NotesToolbarComponent {
  constructor(private readonly routingService: RoutingService) {}

  createNote(): void {
    this.routingService.goToNoteCreator();
  }
}
