import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';
import { CardDesignComponent } from '../card-design/card-design.component';

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbsComponent, CardDesignComponent],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.scss'
})
export class FormElementComponent {

}
