import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-nav-and-tab',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './nav-and-tab.component.html',
  styleUrl: './nav-and-tab.component.scss'
})
export class NavAndTabComponent {

  htmlCode1 = `
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
            tabindex="0">...</div>
    </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-fill"
                type="button" role="tab" aria-controls="home-tab-fill" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-fill"
                type="button" role="tab" aria-controls="profile-tab-fill" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-fill"
                type="button" role="tab" aria-controls="contact-tab-fill" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-fill" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="profile-tab-fill" role="tabpanel" aria-labelledby="profile-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-fill" role="tabpanel" aria-labelledby="contact-tab"
            tabindex="0">...</div>
    </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <ul class="nav nav-underline" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                data-bs-target="#home-tab-underline" type="button" role="tab" aria-controls="home-tab-underline"
                aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                data-bs-target="#profile-tab-underline" type="button" role="tab"
                aria-controls="profile-tab-underline" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                data-bs-target="#contact-tab-underline" type="button" role="tab"
                aria-controls="contact-tab-underline" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-underline" role="tabpanel"
            aria-labelledby="home-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="profile-tab-underline" role="tabpanel" aria-labelledby="profile-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-underline" role="tabpanel" aria-labelledby="contact-tab"
            tabindex="0">...</div>
    </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <ul class="nav nav-underline justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                data-bs-target="#home-tab-bordered" type="button" role="tab" aria-controls="home-tab-bordered"
                aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                data-bs-target="#profile-tab-bordered" type="button" role="tab"
                aria-controls="profile-tab-bordered" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                data-bs-target="#contact-tab-bordered" type="button" role="tab"
                aria-controls="contact-tab-bordered" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-bordered" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="profile-tab-bordered" role="tabpanel" aria-labelledby="profile-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-bordered" role="tabpanel" aria-labelledby="contact-tab"
            tabindex="0">...</div>
    </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <ul class="nav nav-pills" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pill"
                type="button" role="tab" aria-controls="home-tab-pill" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pill"
                type="button" role="tab" aria-controls="profile-tab-pill" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pill"
                type="button" role="tab" aria-controls="contact-tab-pill" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pill" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="profile-tab-pill" role="tabpanel" aria-labelledby="profile-tab"
            tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-pill" role="tabpanel" aria-labelledby="contact-tab"
            tabindex="0">...</div>
    </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                aria-selected="true">Home</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                aria-selected="false">Profile</button>
            <button class="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact"
                aria-selected="false">Contact</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="v-pills-contact" role="tabpanel"
                aria-labelledby="v-pills-contact-tab" tabindex="0">...</div>
        </div>
    </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;
  
}
