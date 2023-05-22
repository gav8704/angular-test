import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

type ncButtonType = 'primary' | 'dangerous' | 'link';

@Component({
  selector: 'button[nc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-btn',
    '[class.nc-btn-primary]': `ncType === 'primary'`,
    '[class.nc-btn-dangerous]': `ncType === 'dangerous'`,
    '[class.nc-btn-link]': `ncType === 'link'`,
    '[class.nc-btn-loading]': `ncLoading`,
  },
})
export class ButtonComponent {
  @Input() ncType: ncButtonType = 'primary';
  @Input() ncLoading: boolean = false;
}
