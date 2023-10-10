import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardHeaderVariants = cva('flex p-6', {
  variants: {
    direction: {
      row: 'flex-row items-center space-x-1.5',
      column: 'flex-col space-y-1.5',
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});
export type CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;

@Directive({
  selector: '[claCardHeader]',
  standalone: true,
})
export class ClaCardHeader {
  private _direction: CardHeaderVariants['direction'] = 'column';
  @Input()
  set direction(value: CardHeaderVariants['direction']) {
    this._direction = value;
    this._class = this.generateClasses();
  }

  private _inputClass = '';
  @Input()
  set class(inputs: string) {
    this._inputClass = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class') _class = this.generateClasses();

  private generateClasses() {
    return cn(
      cardHeaderVariants({ direction: this._direction }),
      this._inputClass
    );
  }
}
