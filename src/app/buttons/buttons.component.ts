import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  htmlCode1 = `
  <button type="button" class="btn btn-primary m-1">Primary</button>
  <button type="button" class="btn btn-secondary m-1">Secondary</button>
  <button type="button" class="btn btn-success m-1">Success</button>
  <button type="button" class="btn btn-danger m-1">Danger</button>
  <button type="button" class="btn btn-warning m-1">Warning</button>
  <button type="button" class="btn btn-info m-1">Info</button>
  <button type="button" class="btn btn-light m-1">Light</button>
  <button type="button" class="btn btn-dark m-1">Dark</button>
  <button type="button" class="btn btn-link m-1">Link</button>
  `;

  cssCode1 = ``;

  tsCode1 = ``;

  htmlCode2 = `
  <button type="button" class="btn btn-outline-primary m-1">Primary</button>
  <button type="button" class="btn btn-outline-secondary m-1">Secondary</button>
  <button type="button" class="btn btn-outline-success m-1">Success</button>
  <button type="button" class="btn btn-outline-danger m-1">Danger</button>
  <button type="button" class="btn btn-outline-warning m-1">Warning</button>
  <button type="button" class="btn btn-outline-info m-1">Info</button>
  <button type="button" class="btn btn-outline-light m-1">Light</button>
  <button type="button" class="btn btn-outline-dark m-1">Dark</button>
  `;

  cssCode2 = ``;

  tsCode2 = ``;

  htmlCode3 = `
  <button type="button" class="btn btn-primary btn-sm m-1">Small button</button>
  <button type="button" class="btn btn-secondary m-1">Normal button</button>
  <button type="button" class="btn btn-success btn-lg m-1">Large button</button>
  <button type="button" class="btn btn-outline-warning btn-sm m-1">Small button</button>
  <button type="button" class="btn btn-outline-info m-1">Normal button</button>
  <button type="button" class="btn btn-outline-danger btn-lg m-1">Large button</button>
  `;

  cssCode3 = ``;
  tsCode3 = ``;

  htmlCode4 = `
  <button type="button" class="btn btn-primary m-1" disabled>Primary button</button>
  <button type="button" class="btn btn-secondary m-1" disabled>Button</button>
  <button type="button" class="btn btn-outline-primary m-1" disabled>Primary button</button>
  <button type="button" class="btn btn-outline-secondary m-1" disabled>Button</button>
  `;

  cssCode4 = ``;
  tsCode4 = ``;

  htmlCode5 = `
  <div class="d-grid gap-2">
    <button class="btn btn-primary m-1" type="button">Button</button>
    <button class="btn btn-primary m-1" type="button">Button</button>
  </div>
  `;

  cssCode5 = ``;

  tsCode5 = ``;

  htmlCode6 = `
  <button type="button" class="btn btn-primary rounded-pill m-1">Primary</button>
  <button type="button" class="btn btn-secondary rounded-pill m-1">Secondary</button>
  <button type="button" class="btn btn-success rounded-pill m-1">Success</button>
  <button type="button" class="btn btn-danger rounded-pill m-1">Danger</button>
  <button type="button" class="btn btn-warning rounded-pill m-1">Warning</button>
  <button type="button" class="btn btn-info rounded-pill m-1">Info</button>
  <button type="button" class="btn btn-light rounded-pill m-1">Light</button>
  <button type="button" class="btn btn-dark rounded-pill m-1">Dark</button>
  <button type="button" class="btn btn-link rounded-pill m-1">Link</button>
  `;
  cssCode6 = ``;
  tsCode6 = ``;

}
