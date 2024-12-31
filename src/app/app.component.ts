import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-design-hub';
  // menuItems = routes;
  isSideNavOpen: boolean = false;

  menuItems = [
    { path: 'home' },
    { path: 'about' },
    {
      path: 'components',
      subItems: [
        { path: 'accordion' },
        { path: 'alerts' },
        { path: 'badge' },
        { path: 'breadcrumbs' },
        { path: 'buttons' },
        { path: 'cards' },
        { path: 'carousel' },
        { path: 'collapse' },
        // { path: 'dropdown' },
        { path: 'list-group' },
        { path: 'modal' },
        { path: 'navbar' },
        { path: 'pagination' },
        { path: 'placeholders' },
        // { path: 'popovers' },
        { path: 'progress' },
        { path: 'scrollspy' },
        { path: 'spinners' },
        { path: 'tabs' },
        // { path: 'toasts' },
        // { path: 'tooltips' },
      ]
    },
    { path: 'forms',
      subItems: [
        { path: 'form-elements' },
        { path: 'form-layouts' },
        { path: 'form-validations' },
      ]
     },
    { path: 'tables'},
    { path: 'templates' },
    { path: 'contact' },
  ];

  // Method to get the index of subItems for each column
  getColumnItems(subItems: any[]) {
    const itemsPerColumn = Math.ceil(subItems.length / 3);
    return [
      subItems.slice(0, itemsPerColumn),
      subItems.slice(itemsPerColumn, itemsPerColumn * 2),
      subItems.slice(itemsPerColumn * 2),
    ];
  }

  // Method to calculate the mid index for splitting subItems
  getSubItemsMidIndex(subItems: any[]): number {
    return Math.ceil(subItems.length / 2);
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  capitalizeFirstLetter(path: any): string {
    if (!path) return 'Default';
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
}
