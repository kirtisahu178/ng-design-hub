import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from "../card-design/card-design.component";
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  htmlCode1 = `
    <div class="container">
        <div class="masonry">

            <div class="card">
                <div class="card-body">
                    Hummingbirds are small, agile birds known for their rapid wing beats and ability to hover in
                    mid-air.
                    They are unique among birds for their vibrant plumage and remarkable metabolism, requiring
                    frequent
                    nectar feeding to sustain their energy levels.
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">The Majestic Eagle</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Symbol of Freedom and Strength</h6>
                    <p class="card-text">Eagles are powerful birds of prey known for their keen eyesight and
                        impressive
                        hunting skills, representing freedom and resilience in various cultures around the world.
                    </p>
                    <a href="#" class="card-link">Read more</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <img src="parrot.jpg" class="card-img-top" alt="parrot.jpg">
                <div class="card-body">
                    <p class="card-text">Parrots are highly intelligent, colorful birds known for their ability to
                        mimic
                        sounds and speech. They are social creatures, often found in tropical regions, and are
                        popular as
                        pets due to their playful nature.</p>
                </div>
            </div>

            <div class="card">
                <img src="hummingbird.jpg" class="card-img-top" alt="hummingbird.jpg">
                <div class="card-body">
                    <h5 class="card-title">Hummingbird</h5>
                    <p class="card-text">Hummingbirds are small, agile birds known for their rapid wing beats and
                        ability to
                        hover in mid-air. They are unique among birds for their vibrant plumage and remarkable
                        metabolism,
                        requiring frequent nectar feeding to sustain their energy levels.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Agile</li>
                    <li class="list-group-item">Colorful</li>
                    <li class="list-group-item">Graceful</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Read more</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    Kingfisher
                </div>
                <div class="card-body">
                    <h5 class="card-title">About Kingfisher</h5>
                    <p class="card-text">The Kingfisher is a brightly colored bird known for its sharp beak and
                        exceptional
                        diving skills, often found near water where it hunts fish. With vibrant plumage, it is a
                        symbol of
                        patience and precision in nature.</p>
                    <a href="#" class="btn btn-primary">Read more</a>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    Birds
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>"Birds teach us that there is no limit to how high we can soar, as long as we spread our
                            wings."
                        </p>
                        <footer class="blockquote-footer"> <cite title="Source Title">Wings of Inspiration</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>


            <div class="card text-center">
                <div class="card-header">
                    Hornbills
                </div>
                <div class="card-body">
                    <h5 class="card-title">About Hornbills</h5>
                    <p class="card-text">Hornbills are large, tropical birds known for their distinctive long,
                        curved bills
                        and vibrant colors. They are found primarily in Africa and Asia, playing a vital role in
                        seed
                        dispersal and forest ecosystems.</p>
                    <a href="#" class="btn btn-primary">Read more</a>
                </div>
                <div class="card-footer text-body-secondary">
                    Read more about hornbills
                </div>
            </div>

            <div class="card text-bg-dark">
                <img src="hornbills.jpg" class="card-img" alt="hornbills.jpg">
                <div class="card-img-overlay">
                    <h5 class="card-title">Hornbills</h5>
                    <p class="card-text">Hornbills are large, tropical birds known for their distinctive long,
                        curved bills
                        and vibrant colors. They are found primarily in Africa and Asia, playing a vital role in
                        seed
                        dispersal and forest ecosystems.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="penguin2.jpg" class="img-fluid rounded-start" alt="penguin.jpg">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Penguin</h5>
                            <p class="card-text">Penguins are flightless seabirds known for their distinctive
                                black-and-white feathers, waddling gait, and excellent swimming abilities.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `;

  cssCode1 = `
.masonry {
    column-count: 3;
    column-gap: 1rem;
}

@media (max-width: 992px) {
    .masonry {
        column-count: 2;
    }
}

@media (max-width: 768px) {
    .masonry {
        column-count: 1;
    }
}

.masonry .card {
    display: inline-block;
    margin-bottom: 1rem;
    width: 100%;
}
  `;

  tsCode1 = ``;

  htmlCode2 = `
    <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <div class="row">
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-end">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <div class="card-group">
                <div class="card">
                    <img src="pelican.jpg" class="card-img-top" alt="pelican.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="pelican.jpg" class="card-img-top" alt="pelican.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="pelican.jpg" class="card-img-top" alt="pelican.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="pelican.jpg" class="card-img-top" alt="pelican.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-4">
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-4 mt-1">
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" style="height: 120px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">...</p>
                </div>
            </div>
        </div>
    </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

}
