import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesDisplayComponent {
  isAsideCollapsed = false;

  toogleAside(): void {
    this.isAsideCollapsed = !this.isAsideCollapsed;
  }
}
