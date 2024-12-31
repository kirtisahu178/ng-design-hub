import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';
import { CardDesignComponent } from '../card-design/card-design.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbsComponent, CardDesignComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  users = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
    { id: 3, firstName: 'Larry the Bird', lastName: '', handle: '@twitter', fullName: 'Larry the Bird' }
  ];

  htmlCode1 = `
  
  `;
  cssCode1 = `
  
  `;
  tsCode1 = `
  
  `;

  htmlCode2 = `
  
  `;
  cssCode2 = `
  
  `;
  tsCode2 = `
  
  `;

  htmlCode3 = `
  
  `;
  cssCode3 = `
  
  `;
  tsCode3 = `
  
  `;

  htmlCode4 = `
  
  `;
  cssCode4 = `
  
  `;
  tsCode4 = `
  
  `;

  htmlCode5 = `
  
  `;
  cssCode5 = `
  
  `;
  tsCode5 = `
  
  `;

  htmlCode6 = `
  
  `;
  cssCode6 = `
  
  `;
  tsCode6 = `
  
  `;


}
