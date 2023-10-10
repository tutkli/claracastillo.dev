import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardFooterVariants = cva('flex p-6 pt-0', {
  variants: {
    direction: {
      row: 'flex-row items-center space-x-1.5',
      column: 'flex-col space-y-1.5',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});
export type CardFooterVariants = VariantProps<typeof cardFooterVariants>;

@Directive({
  selector: '[claCardFooter]',
  standalone: true,
})
export class ClaCardFooter {
  private _direction: CardFooterVariants['direction'] = 'row';
  @Input()
  set direction(value: CardFooterVariants['direction']) {
    this._direction = value;
    this._class = this.generateClasses();
  }

  private _inputsClass = '';
  @Input()
  set class(inputs: string) {
    this._inputsClass = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class') _class = this.generateClasses();

  private generateClasses() {
    return cn(
      cardFooterVariants({ direction: this._direction }),
      this._inputsClass
    );
  }
}
