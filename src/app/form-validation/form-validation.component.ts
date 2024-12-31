import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';
import { CardDesignComponent } from '../card-design/card-design.component';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbsComponent, CardDesignComponent],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss'
})
export class FormValidationComponent {

}
