import {
  effect,
  inject,
  Injectable,
  RendererFactory2,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';

const Themes = ['light', 'dark'] as const;
export type Theme = (typeof Themes)[number];

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _renderer = inject(RendererFactory2).createRenderer(null, null);
  private _document = inject(DOCUMENT);
  private _query = inject(MediaMatcher).matchMedia(
    '(prefers-color-scheme: dark)'
  );
  private _theme$ = signal<Theme>(
    (localStorage.getItem('theme') as Theme) ||
      (this._query.matches ? 'dark' : 'light')
  );

  public theme$ = this._theme$.asReadonly();

  constructor() {
    effect(() => {
      if (this._theme$() === 'dark') {
        this._renderer.addClass(this._document.documentElement, 'dark');
      } else if (this._document.documentElement.className.includes('dark')) {
        this._renderer.removeClass(this._document.documentElement, 'dark');
      }
    });
  }

  public toggleTheme(): void {
    this._theme$.update(theme => (theme === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('darkMode', this._theme$());
  }
}
