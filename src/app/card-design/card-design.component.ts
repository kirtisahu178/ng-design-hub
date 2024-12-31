import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CodingTabComponent } from '../coding-tab/coding-tab.component';

@Component({
  selector: 'app-card-design',
  standalone: true,
  imports: [CommonModule, CodingTabComponent],
  templateUrl: './card-design.component.html',
  styleUrl: './card-design.component.scss'
})
export class CardDesignComponent {

  @Input() title: string = '';
  @Input() htmlCode: string = '';
  @Input() cssCode: string = '';
  @Input() tsCode: string = '';
  
  isVisible: boolean = false;
  activeTab: string = 'html';

  toggleTabs() {
    this.isVisible = !this.isVisible;
  }

}
