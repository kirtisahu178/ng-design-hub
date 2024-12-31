import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  htmlCode1 = `
    <ul class="list-group">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">And a fifth one</li>
                            </ul>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">And a fifth one</li>
                            </ul>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-body-secondary">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-body-secondary">And some muted small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-body-secondary">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-body-secondary">And some muted small print.</small>
                </a>
            </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                    The current link item
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                                <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A
                                    disabled link item</a>
                            </div>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <div class="list-group">
                                <button type="button" class="list-group-item list-group-item-action active"
                                    aria-current="true">
                                    The current button
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">A second button
                                    item</button>
                                <button type="button" class="list-group-item list-group-item-action">A third button
                                    item</button>
                                <button type="button" class="list-group-item list-group-item-action">A fourth button
                                    item</button>
                                <button type="button" class="list-group-item list-group-item-action" disabled>A
                                    disabled button item</button>
                            </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <ol class="list-group list-group-numbered">
                                <li class="list-group-item">A list item</li>
                                <li class="list-group-item">A list item</li>
                                <li class="list-group-item">A list item</li>
                            </ol>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;

  htmlCode7 = `
    <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Content for list item
                                    </div>
                                    <span class="badge text-bg-primary rounded-pill">14</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Content for list item
                                    </div>
                                    <span class="badge text-bg-primary rounded-pill">14</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Content for list item
                                    </div>
                                    <span class="badge text-bg-primary rounded-pill">14</span>
                                </li>
                            </ol>
  `;

  cssCode7 = `

  `;

  tsCode7 = ``;

  htmlCode8 = `
    <ul class="list-group">
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                                    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                                    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
                                    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
                                </li>
                            </ul>
  `;

  cssCode8 = `

  `;

  tsCode8 = ``;

  htmlCode9 = `
    <ul class="list-group">
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                        id="firstRadio" checked>
                                    <label class="form-check-label" for="firstRadio">First radio</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                        id="secondRadio">
                                    <label class="form-check-label" for="secondRadio">Second radio</label>
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                        id="thirdRadio">
                                    <label class="form-check-label" for="thirdRadio">Third radio</label>
                                </li>
                            </ul>
  `;

  cssCode9 = `

  `;

  tsCode9 = ``;

  htmlCode10 = `
    <ul class="list-group">
                <li class="list-group-item active" aria-current="true">An active item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item disabled">And a fifth one</li>
            </ul>
  `;

  cssCode10 = `

  `;

  tsCode10 = ``;
}
