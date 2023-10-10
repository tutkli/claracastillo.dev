import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClaHeader } from './components/header';
import { ClaProjects } from './components/projects';

@Component({
  selector: 'cla-root',
  standalone: true,
  imports: [ClaHeader, ClaProjects],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="mx-auto mt-4 max-w-[100ch] sm:mt-8 md:mt-14">
    <section class="container pb-8 pt-6 md:py-10">
      <cla-header />

      <cla-projects />
    </section>
  </div>`,
})
export class AppComponent {}
