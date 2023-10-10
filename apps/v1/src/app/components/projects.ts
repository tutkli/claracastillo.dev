import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { map } from 'rxjs';
import { orderBy } from 'lodash-es';
import { GithubRepository } from '../models/github.model';
import { ClaProjectCard } from './project-card';
import { ClaButton } from '@claracastillo.dev/ui';

@Component({
  selector: 'cla-projects',
  standalone: true,
  imports: [NgForOf, AsyncPipe, NgIf, ClaProjectCard, SlicePipe, ClaButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2
        class="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Projects
      </h2>
      <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <cla-project-card
          *ngFor="let repo of projects$ | async | slice : 0 : 6"
          [project]="repo" />
      </div>
      <a
        claButton
        variant="secondary"
        class="mt-5 w-full"
        href="https://github.com/tutkli"
        target="_blank"
        rel="noopener">
        See more ...
      </a>
    </section>
  `,
})
export class ClaProjects {
  private httpClient = inject(HttpClient);

  projects$ = this.httpClient
    .get<GithubRepository[]>('https://api.github.com/users/tutkli/repos')
    .pipe(
      map((repos: GithubRepository[]): GithubRepository[] =>
        orderBy(repos, 'stargazers_count', 'desc')
      )
    );
}
