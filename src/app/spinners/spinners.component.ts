import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './spinners.component.html',
  styleUrl: './spinners.component.scss'
})
export class SpinnersComponent {

  htmlCode1 = `
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <button class="btn btn-primary me-2" type="button" disabled>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span class="visually-hidden" role="status">Loading...</span>
    </button>
    <button class="btn btn-primary me-2" type="button">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
    </button>
    <button class="btn btn-primary me-2" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span class="visually-hidden" role="status">Loading...</span>
    </button>
    <button class="btn btn-primary me-2" type="button">
        <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
    </button>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <div class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border spinner-border-md" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <div class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow spinner-grow-md" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow" style="width: 4rem; height: 4rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <hr>
    <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

  htmlCode7 = `
    <div class="spinner-border float-end" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  `;

  cssCode7 = `

  `;

  tsCode7 = ``;

  htmlCode8 = `
    <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  `;

  cssCode8 = `

  `;

  tsCode8 = ``;
  
}
