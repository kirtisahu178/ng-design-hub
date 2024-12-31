import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  htmlCode1 = `
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active item-height">
        <img src="cake1.jpg" class="d-block w-100" alt="...">
      </div>
    <div class="carousel-item item-height">
      <img src="cake2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item item-height">
      <img src="cake3.jpg" class="d-block w-100" alt="...">
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

  cssCode1 = `
  `;

  tsCode1 = ``;

  htmlCode2 = `
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
          class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active item-height">
          <img src="pastry1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item item-height">
          <img src="pastry2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item item-height">
          <img src="pastry3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
  `;

  cssCode2 = `
  `;

  tsCode2 = ``;

  htmlCode3 = `
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
          class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active item-height">
          <img src="choco-pastry1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Chocolate Pastry</h5>
            <p>In every rich, velvety bite, I find the sweetness of our love, a delightful
                indulgence that warms my heart.</p>
          </div>
        </div>
        <div class="carousel-item item-height">
          <img src="straberry-pastry1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Straberry Pastry</h5>
            <p>In every bite of this strawberry pastry, I taste the sweetness of our love, delicate
                and delightful.</p>
          </div>
        </div>
        <div class="carousel-item item-height">
          <img src="pineapple-pastry1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Pineapple Pastry</h5>
            <p>In every bite of pineapple pastry, I taste a slice of paradise, sweet and delightful.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
  `;

  cssCode3 = `
  `;

  tsCode3 = ``;

  htmlCode4 = `
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div class="carousel-item active item-height">
        <img src="cake1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item item-height">
        <img src="cake2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item item-height">
        <img src="cake3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
     </button>
  </div>
  `;

  cssCode4 = `
  `;

  tsCode4 = ``;

  htmlCode5 = `
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active item-height">
        <img src="cake1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item item-height">
        <img src="cake2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item item-height">
        <img src="cake3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

  cssCode5 = `
  `;

  tsCode5 = ``;

  htmlCode6 = `
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active item-height">
        <img src="cake1.jpg" class="d-block w-100" alt="cake1.jpg">
      </div>
      <div class="carousel-item item-height">
        <img src="cake2.jpg" class="d-block w-100" alt="cake2.jpg">
      </div>
      <div class="carousel-item item-height">
        <img src="cake3.jpg" class="d-block w-100" alt="cake3.jpg">
      </div>
    </div>
  </div>
  `;
  cssCode6 = `
  `;
  tsCode6 = ``;
}
