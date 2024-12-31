import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from "../card-design/card-design.component";
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {

  htmlCode1 = `
    <h1>h1 heading <span class="badge text-bg-primary">New</span></h1>
    <h2>h2 heading <span class="badge text-bg-secondary">New</span></h2>
    <h3>h3 heading <span class="badge text-bg-success">New</span></h3>
    <h4>h4 heading <span class="badge text-bg-danger">New</span></h4>
    <h5>h5 heading <span class="badge text-bg-warning">New</span></h5>
    <h6>h6 heading <span class="badge text-bg-info">New</span></h6>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <button type="button" class="btn btn-primary m-1">
      Notifications <span class="badge bg-white text-primary">4</span>
    </button>
    <button type="button" class="btn btn-secondary m-1">
      Notifications <span class="badge bg-white text-secondary">4</span>
    </button>
    <button type="button" class="btn btn-success m-1">
      Notifications <span class="badge bg-white text-success">4</span>
    </button>
    <button type="button" class="btn btn-danger m-1">
      Notifications <span class="badge bg-white text-danger">4</span>
    </button>
    <button type="button" class="btn btn-warning m-1">
      Notifications <span class="badge bg-white text-warning">4</span>
    </button>
    <button type="button" class="btn btn-info m-1">
      Notifications <span class="badge bg-white text-info">4</span>
    </button>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <button type="button" class="btn btn-primary position-relative">
      Inbox
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
      </span>
    </button>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <button type="button" class="btn btn-primary position-relative">
      Profile
      <span
          class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
      </span>
    </button>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <span class="badge text-bg-primary m-1">Primary</span>
    <span class="badge text-bg-secondary m-1">Secondary</span>
    <span class="badge text-bg-success m-1">Success</span>
    <span class="badge text-bg-danger m-1">Danger</span>
    <span class="badge text-bg-warning m-1">Warning</span>
    <span class="badge text-bg-info m-1">Info</span>
    <span class="badge text-bg-light m-1">Light</span>
    <span class="badge text-bg-dark m-1">Dark</span>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <span class="badge rounded-pill text-bg-primary m-1">Primary</span>
    <span class="badge rounded-pill text-bg-secondary m-1">Secondary</span>
    <span class="badge rounded-pill text-bg-success m-1">Success</span>
    <span class="badge rounded-pill text-bg-danger m-1">Danger</span>
    <span class="badge rounded-pill text-bg-warning m-1">Warning</span>
    <span class="badge rounded-pill text-bg-info m-1">Info</span>
    <span class="badge rounded-pill text-bg-light m-1">Light</span>
    <span class="badge rounded-pill text-bg-dark m-1">Dark</span>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

  isTabs1Visible: boolean = false;
  isTabs2Visible: boolean = false;
  isTabs3Visible: boolean = false;
  isTabs4Visible: boolean = false;
  isTabs5Visible: boolean = false;
  isTabs6Visible: boolean = false;

  activeTab: string = 'html';

  toggleTabs(tab_type: any) {
    if (tab_type == 'tab1') {
      this.isTabs1Visible = !this.isTabs1Visible;
    } else if (tab_type == 'tab2') {
      this.isTabs2Visible = !this.isTabs2Visible;
    } else if (tab_type == 'tab3') {
      this.isTabs3Visible = !this.isTabs3Visible;
    } else if (tab_type == 'tab4') {
      this.isTabs4Visible = !this.isTabs4Visible;
    } else if (tab_type == 'tab5') {
      this.isTabs5Visible = !this.isTabs5Visible;
    } else if (tab_type == 'tab6') {
      this.isTabs6Visible = !this.isTabs6Visible;
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab; 
  }

}
