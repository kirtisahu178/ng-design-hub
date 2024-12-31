import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {

  htmlCode1 = `
      <div class="progress mb-1" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 0%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 50%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 75%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 100%"></div>
      </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
      <div class="progress mb-1" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 1px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 5px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example 10px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 10px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example 15px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 15px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 20px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example 25px high" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 25px">
        <div class="progress-bar" style="width: 25%"></div>
      </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
      <div class="progress mb-1" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 25%">25%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 50%">50%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" style="width: 75%">75%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Example with label" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">100%</div>
      </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
      <div class="progress mb-1" role="progressbar" aria-label="Success example" aria-valuenow="10" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar bg-primary" style="width: 10%">10%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar bg-success" style="width: 25%">25%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar bg-info" style="width: 50%">50%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar bg-warning" style="width: 75%">75%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar bg-danger" style="width: 100%">100%</div>
      </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
      <div class="progress mb-1" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Success striped example" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Info striped example" aria-valuenow="50"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Warning striped example" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Danger striped example" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
      </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
      <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="10"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-pr" style="width: 10%">10%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 25%">25%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="50"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style="width: 50%">50%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 75%">75%</div>
      </div>
      <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 100%">100%</div>
      </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;
  
}
