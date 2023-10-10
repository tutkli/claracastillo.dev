import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../core/utils/cn';

const cardDescriptionVariants = cva('text-sm text-muted-foreground', {
  variants: {},
  defaultVariants: {},
});
export type CardDescriptionVariants = VariantProps<
  typeof cardDescriptionVariants
>;

@Directive({
  selector: '[claCardDescription]',
  standalone: true,
})
export class ClaCardDescription {
  @HostBinding('class')
  private _class = this.generateClasses();

  private _inputClass = '';
  @Input()
  set class(inputs: string) {
    this._inputClass = inputs;
    this._class = this.generateClasses();
  }

  private generateClasses() {
    return cn(cardDescriptionVariants(), this._inputClass);
  }
}
