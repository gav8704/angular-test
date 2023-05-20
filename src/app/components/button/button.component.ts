import { Component, Input, ViewEncapsulation } from '@angular/core';

type ncButtonType = 'primary' | 'dangerous';

@Component({
  selector: 'button[nc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'nc-btn',
    '[class.nc-btn-primary]': `ncType === 'primary'`,
    '[class.nc-btn-dangerous]': `ncType === 'dangerous'`,
    '[class.nc-btn-loading]': `ncLoading`,
  },
})
export class ButtonComponent {
  @Input() ncType: ncButtonType = 'primary';
  @Input() ncLoading: boolean = false;
}
