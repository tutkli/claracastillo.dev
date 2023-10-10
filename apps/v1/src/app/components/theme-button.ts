import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ClaButton, ThemeService } from '@claracastillo.dev/ui';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';

@Component({
  selector: 'cla-theme-button',
  standalone: true,
  imports: [NgIcon, ClaButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideSun, lucideMoon })],
  template: `<button
    claButton
    variant="ghost"
    size="icon"
    (click)="toggleTheme()">
    <ng-icon [name]="theme$() === 'dark' ? 'lucideSun' : 'lucideMoon'" />
    <span class="sr-only">Toggle dark mode</span>
  </button>`,
})
export class ClaThemeButton {
  private themeService = inject(ThemeService);

  public theme$ = this.themeService.theme$;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
