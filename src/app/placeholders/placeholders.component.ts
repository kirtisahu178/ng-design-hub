import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {

  htmlCode1 = `
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <img src="cake1.jpg" class="card-img-top" alt="cake1.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <img class="card-img-top" style="height: 210px; background-color: #868e96;">
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
          </div>
        </div>
      </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <span class="placeholder col-6"></span><br>
    <span class="placeholder w-75"></span> <br>
    <span class="placeholder" style="width: 25%;"></span>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <span class="placeholder col-12 placeholder-lg"></span>
    <span class="placeholder col-12"></span>
    <span class="placeholder col-12 placeholder-sm"></span>
    <span class="placeholder col-12 placeholder-xs"></span>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <p class="placeholder-glow">
      <span class="placeholder col-12"></span>
    </p>
    <p class="placeholder-wave">
      <span class="placeholder col-12"></span>
    </p>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
      <div class="d-flex align-items-start justify-content-between">
        <div class="d-flex align-items-center">
          <i class="bi bi-youtube fs-4 me-2"></i>
          <span class="fw-bold">YouTube</span>
        </div>
        <div>
          <i class="fa-brands fa-chromecast fs-5 me-3"></i>
          <i class="bi bi-bell fs-5 me-3 position-relative"><span
              class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
              5</span></i>
          <i class="bi bi-search fs-5 me-3"></i>
        </div>
      </div>

      <div class="mb-2">
        <p class="card-text">
          <span class="placeholder col-3 placeholder-lg" style="border-radius: 10px;"></span>
          <span class="placeholder col-3 placeholder-lg" style="border-radius: 10px;"></span>
          <span class="placeholder col-3 placeholder-lg" style="border-radius: 10px;"></span>
          <span class="placeholder col-3 placeholder-lg" style="border-radius: 10px;"></span>
        </p>
      </div>
      <!-- Placeholder for YouTube Thumbnail -->
      <div style="height: 200px; background-color: #909294;"></div>
      <!-- Placeholder for Text -->
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <!-- Circle placeholder for profile or icon -->
          <span class="placeholder rounded-circle" style="width: 50px; height: 50px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-12"></span><br>
            <span class="placeholder col-12"></span><br>
            <span class="placeholder col-4"></span>
          </p>
        </div>
      </div>

      <!-- Placeholder for YouTube Thumbnail -->
      <div style="height: 200px; background-color: #909294;"></div>
      <!-- Placeholder for Text -->
      <div class="d-flex align-items-start mt-3">
        <div class="flex-column me-3">
          <!-- Circle placeholder for profile or icon -->
          <span class="placeholder rounded-circle" style="width: 50px; height: 50px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-12"></span><br>
            <span class="placeholder col-12"></span><br>
            <span class="placeholder col-4"></span>
          </p>
        </div>
      </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
      <!-- Placeholder for linkedin header -->
      <div class="d-flex align-items-start justify-content-between">
        <div>
          <span class="placeholder rounded-circle" style="width: 30px; height: 30px;"></span>
        </div>
        <div class="p-1" style="background-color: #eaf1f3; width: 250px; border-radius: 5px;">
          <i class="bi bi-search"></i> Search
        </div>
        <div>
          <i class="bi bi-plus-square-fill fs-5 me-3"></i>
          <i class="bi bi bi-chat-dots fs-5 position-relative"><span
              class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
              5</span></i>
        </div>
      </div>
      <!-- Placeholder for linkedin header -->

      <!-- Placeholder for linkedin first div -->
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-4 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-6 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-5 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          </p>
        </div>
      </div>

      <div class="flex-column w-100 mb-2">
        <p class="card-text">
          <span class="placeholder col-11 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-10 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-12 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-8 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
        </p>
      </div>

      <div class="d-flex align-items-start justify-content-between">
        <p class="card-text d-flex align-items-start">
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder me-5" style="width: 50px; border-radius: 10px;"></span>
        </p>
        <span class="placeholder ms-auto" style="width: 100px; border-radius: 10px;"></span>
      </div>
      <!-- Placeholder for linkedin first div -->

      <!-- Placeholder for linkedin second div -->
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-4 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-6 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-5 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          </p>
        </div>
      </div>

      <div class="flex-column w-100 mb-2">
        <p class="card-text">
          <span class="placeholder col-12 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-11 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
        </p>
      </div>

      <div class="mb-2" style="height: 150px; background-color: #909294;"></div>

      <div class="d-flex align-items-start justify-content-between">
        <p class="card-text d-flex align-items-start">
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder rounded-circle me-1" style="width: 15px; height: 10px;"></span>
          <span class="placeholder me-5" style="width: 50px; border-radius: 10px;"></span>
        </p>
        <span class="placeholder ms-auto" style="width: 100px; border-radius: 10px;"></span>
      </div>
      <!-- Placeholder for linkedin second div -->

      <!-- Placeholder for linkedin third div -->
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-4 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-6 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
            <span class="placeholder col-5 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          </p>
        </div>
      </div>

      <div class="flex-column w-100 mb-2">
        <p class="card-text">
          <span class="placeholder col-11 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-10 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-12 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
          <span class="placeholder col-8 placeholder-sm d-block mb-1" style="border-radius: 10px;"></span>
        </p>
      </div>
      <!-- Placeholder for linkedin third div -->
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

  htmlCode7 = `
      <!-- Placeholder for whatsapp header -->
      <div class="d-flex align-items-start justify-content-between">
        <div class="d-flex align-items-center">
          <span class="fw-bold">WhatsApp</span>
        </div>
        <div>
          <i class="bi bi-qr-code-scan fs-5 me-3"></i>
          <i class="bi bi-camera fs-5 me-3"></i>
          <i class="bi bi-three-dots-vertical fs-5 me-3"></i>
        </div>
      </div>

      <div class="p-2 mt-1" style="background-color: #eaf1f3; border-radius: 20px;">
        <div class="d-flex align-items-center">
          <div class="bg-secondary d-flex align-items-center justify-content-center rounded-circle"
            style="width: 20px; height: 20px;">
            <div class="d-flex align-items-center justify-content-center rounded-circle"
              style="width: 10px; height: 10px; background-color: #eaf1f3;"></div>
          </div>
          <span class="ms-2">Ask Meta AI or Search</span>
        </div>
      </div>

      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>
      <div class="d-flex align-items-start mt-3 mb-2">
        <div class="flex-column me-3">
          <span class="placeholder rounded-circle" style="width: 40px; height: 40px;"></span>
        </div>
        <div class="flex-column w-100">
          <p class="card-text">
            <span class="placeholder col-7 placeholder-sm me-5" style="border-radius: 10px;"></span>
            <span class="placeholder col-3 placeholder-sm" style="border-radius: 10px;"></span>
            <span class="placeholder col-11 placeholder-sm me-1" style="border-radius: 10px;"></span>
            <span class="placeholder rounded-circle me-1" style="width: 15px; height: 8px;"></span>
          </p>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="me-5 d-flex flex-column align-items-center">
          <i class="bi bi-chat-left-text-fill fs-5"></i>
          <p>Chats</p>
        </div>
        <div class="me-5 d-flex flex-column align-items-center">
          <i class="bi bi-signal fs-5"></i>
          <p>Updates</p>
        </div>
        <div class="me-5 d-flex flex-column align-items-center">
          <i class="bi bi-people-fill fs-5"></i>
          <p>Communities</p>
        </div>
        <div class="d-flex flex-column align-items-center">
          <i class="bi bi-telephone-fill fs-5"></i>
          <p>Calls</p>
        </div>
      </div>

      <!-- Placeholder for whatsapp header -->
  `;

  cssCode7 = `

  `;

  tsCode7 = ``;

  
  
}
