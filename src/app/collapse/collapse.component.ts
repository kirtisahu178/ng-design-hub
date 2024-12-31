import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from "../card-design/card-design.component";
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent {

  htmlCode1 = `
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
          aria-expanded="false" aria-controls="collapseExample">
           Link with href
      </a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Button with data-bs-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when
          the user activates the relevant trigger.
      </div>
    </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <p>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
      </button>
    </p>
    <div style="min-height: 120px;">
      <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card card-body" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </div>
      </div>
    </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
          aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>

      <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2" aria-expanded="false"
          aria-controls="multiCollapseExample2">Toggle second element</button>
                
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
          aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle bothelements</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
              Some placeholder content for the first collapse component of this multi-collapse example. This
              panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
              Some placeholder content for the second collapse component of this multi-collapse example. This
              panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
    </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

}
