import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardDesignComponent } from "../card-design/card-design.component";
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [RouterModule, CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {

  htmlCode1 = `
    <div class="alert alert-primary alert-dismissible show" role="alert">
        A simple primary alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-secondary alert-dismissible show" role="alert">
        A simple secondary alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-success alert-dismissible show" role="alert">
        A simple success alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-danger alert-dismissible show" role="alert">
        A simple danger alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-warning alert-dismissible show" role="alert">
        A simple warning alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-info alert-dismissible show" role="alert">
        A simple info alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-light alert-dismissible show" role="alert">
        A simple light alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-dark alert-dismissible show" role="alert">
        A simple dark alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <div class="alert bg-primary alert-dismissible show text-white" role="alert">
        A simple primary alert with solid color—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
    <div class="alert bg-secondary alert-dismissible show text-white" role="alert">
        A simple secondary alert with solid color—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
    <div class="alert bg-success alert-dismissible show text-white" role="alert">
        A simple success alert with solid color—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
    <div class="alert bg-danger alert-dismissible show text-white" role="alert">
        A simple danger alert with solid color—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
    <div class="alert bg-warning alert-dismissible show" role="alert">
        A simple warning alert with solid color—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert bg-info alert-dismissible show" role="alert">
        A simple info alert with solid color—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert bg-light alert-dismissible show" role="alert">
        A simple light alert with solid color—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert bg-dark alert-dismissible show text-white" role="alert">
        A simple dark alert with solid color—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <div class="alert alert-primary alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-info-circle-fill me-2"></i>
        A simple primary alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-secondary alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-info-circle-fill me-2"></i>
        A simple secondary alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-success alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-check-circle-fill me-2"></i>
        A simple success alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-danger alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        A simple danger alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-warning alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-exclamation-diamond-fill me-2"></i>
        A simple warning alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-info alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-info-circle-fill me-2"></i>
        A simple info alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-light alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-info-circle me-2"></i>
        A simple light alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dark alert-dismissible show d-flex align-items-center" role="alert">
        <i class="bi bi-info-circle-fill me-2"></i>
        A simple dark alert with icon —check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <div class="alert alert-dismissible show border-primary text-primary" role="alert">
        A simple primary alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-secondary text-secondary" role="alert">
        A simple secondary alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-success text-success" role="alert">
        A simple success alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-danger text-danger" role="alert">
        A simple danger alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-warning text-warning" role="alert">
        A simple warning alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-info text-info" role="alert">
        A simple info alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-light text-light bg-dark" role="alert">
        A simple light alert—check it out!
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>

    <div class="alert alert-dismissible show border-dark text-dark" role="alert">
        A simple dark alert—check it out!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <div class="alert alert-primary" role="alert">
        <h4 class="alert-heading">Primary Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-secondary" role="alert">
        <h4 class="alert-heading">Secondary Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Success Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Danger Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">Warning Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-info" role="alert">
        <h4 class="alert-heading">Info Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-light" role="alert">
        <h4 class="alert-heading">Light Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>

    <div class="alert alert-dark" role="alert">
        <h4 class="alert-heading">Dark Heading</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
            bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

}
