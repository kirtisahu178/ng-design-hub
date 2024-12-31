import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';
import { CardDesignComponent } from '../card-design/card-design.component';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbsComponent, CardDesignComponent],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss'
})
export class FormLayoutComponent {

}
