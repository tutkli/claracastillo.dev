import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardTitleVariants = cva(
  'text-lg font-semibold leading-none tracking-tight',
  {
    variants: {},
    defaultVariants: {},
  }
);
export type CardTitleVariants = VariantProps<typeof cardTitleVariants>;

@Directive({
  selector: '[claCardTitle]',
  standalone: true,
})
export class ClaCardTitle {
  private _inputClass = '';
  @Input()
  set class(inputs: string) {
    this._inputClass = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class') _class = this.generateClasses();

  private generateClasses() {
    return cn(cardTitleVariants(), this._inputClass);
  }
}
