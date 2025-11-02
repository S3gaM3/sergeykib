import { Component, computed, inject, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ProjectsService, Project } from '../../app/core/projects';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly projectsService = inject(ProjectsService);
  readonly projects = signal<Project[]>(this.projectsService.getAll());
}
