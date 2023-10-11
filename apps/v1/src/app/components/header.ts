import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClaThemeButton } from './theme-button';

@Component({
  selector: 'cla-header',
  standalone: true,
  imports: [ClaThemeButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <header class="mb-14 flex w-full justify-between">
    <div>
      <span class="text-3xl leading-none sm:text-4xl sm:leading-tight">
        Hi there,
      </span>
      <h1
        class="text-3xl font-extrabold leading-none sm:text-4xl sm:leading-tight">
        I’m
        <span
          class="bg-gradient-to-r from-red-500 to-amber-400 bg-[length:200%] bg-clip-text text-transparent">
          Clara Castillo
        </span>
      </h1>
      <p
        class="inline-block pt-2 text-sm opacity-90 dark:opacity-80 md:text-base"
        style="text-wrap:balance">
        I’m a front-end developer based in Spain, building web applications with
        Angular, Vue, Solid and TypeScript. I like to play games, watch anime
        and bother my cat.
      </p>
    </div>
    <cla-theme-button />
  </header>`,
})
export class ClaHeader {}
