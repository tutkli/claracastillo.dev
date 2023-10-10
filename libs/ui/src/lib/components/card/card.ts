import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardVariants = cva(
  'rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-card-foreground shadow-sm',
  {
    variants: {},
    defaultVariants: {},
  }
);
export type CardVariants = VariantProps<typeof cardVariants>;

@Directive({
  selector: '[claCard]',
  standalone: true,
})
export class ClaCard {
  private _inputClass = '';
  @Input()
  set class(inputs: string) {
    this._inputClass = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class') _class = this.generateClasses();

  private generateClasses() {
    return cn(cardVariants(), this._inputClass);
  }
}
