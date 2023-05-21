import {
  Component,
  Input,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'nc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() ncTitle: string | null = null;
}
