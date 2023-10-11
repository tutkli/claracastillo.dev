import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  ClaBadge,
  ClaButton,
  ClaCard,
  ClaCardContent,
  ClaCardDescription,
  ClaCardFooter,
  ClaCardHeader,
  ClaCardTitle,
  getLanguageColor,
} from '@claracastillo.dev/ui';
import { GithubRepository } from '../models/github.model';
import { NgForOf, NgStyle } from '@angular/common';
import {
  lucideExternalLink,
  lucideGitFork,
  lucideStar,
} from '@ng-icons/lucide';

@Component({
  selector: 'cla-project-card',
  standalone: true,
  imports: [
    ClaCard,
    ClaCardHeader,
    ClaCardTitle,
    ClaCardDescription,
    ClaCardContent,
    ClaCardFooter,
    NgForOf,
    NgIcon,
    ClaBadge,
    NgStyle,
    ClaButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({ lucideExternalLink, lucideStar, lucideGitFork }),
  ],
  template: ` <section claCard class="flex h-full flex-col justify-between">
    <div claCardHeader>
      <h3 claCardTitle class="flex items-center justify-between">
        {{ project.name }}
        <a
          claButton
          variant="ghost"
          size="sm"
          [href]="project.url"
          target="_blank"
          rel="noopener">
          <ng-icon name="lucideExternalLink" />
          <span class="sr-only">{{ project.name }} url</span>
        </a>
      </h3>
      <p claCardDescription>{{ project.description }}</p>
    </div>
    <p claCardContent>
      <span
        claBadge
        variant="secondary"
        class="m-0.5"
        *ngFor="let topic of project.topics">
        {{ topic }}
      </span>
    </p>
    <div claCardFooter class="flex items-center justify-between">
      <div class="flex items-center">
        <span
          class="mr-2 block h-3 w-3 rounded-full"
          [ngStyle]="{
            'background-color': getLanguageColor(project.language)
          }"></span>

        {{ project.language }}
      </div>

      <div class="flex justify-end space-x-0.5">
        <a
          claButton
          variant="ghost"
          size="sm"
          class="space-x-1"
          [href]="project.url"
          target="_blank"
          rel="noopener">
          <ng-icon name="lucideStar" />
          <span>{{ project.stargazers_count }}</span>
          <span class="sr-only">{{ project.name }} stargazers count</span>
        </a>

        <a
          claButton
          variant="ghost"
          size="sm"
          class="space-x-1"
          [href]="'https://github.com/tutkli/' + project.name + '/forks'"
          target="_blank"
          rel="noopener">
          <ng-icon name="lucideGitFork" />
          <span>{{ project.forks_count }}</span>
          <span class="sr-only">{{ project.name }} forks count</span>
        </a>
      </div>
    </div>
  </section>`,
})
export class ClaProjectCard {
  @Input({ required: true }) project!: GithubRepository;
  protected readonly getLanguageColor = getLanguageColor;
}
