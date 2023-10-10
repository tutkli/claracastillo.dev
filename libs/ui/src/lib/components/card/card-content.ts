import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardContentVariants = cva('p-6 pt-0', {
  variants: {},
  defaultVariants: {},
});
export type CardContentVariants = VariantProps<typeof cardContentVariants>;

@Directive({
  selector: '[claCardContent]',
  standalone: true,
})
export class ClaCardContent {
  private _inputClass = '';

  @Input()
  set class(inputs: string) {
    this._inputClass = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class') _class = this.generateClasses();

  private generateClasses() {
    return cn(cardContentVariants(), this._inputClass);
  }
}
