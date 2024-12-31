import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-breadcrumbs',
  standalone: true,
  imports: [],
  templateUrl: './page-breadcrumbs.component.html',
  styleUrl: './page-breadcrumbs.component.scss'
})
export class PageBreadcrumbsComponent {

  @Input() title: string = '';

}
