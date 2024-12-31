import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-coding-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coding-tab.component.html',
  styleUrl: './coding-tab.component.scss'
})
export class CodingTabComponent {

  @Input() tabs: string[] = [];
  @Input() activeTab: string = 'html';
  @Output() activeTabChange = new EventEmitter<string>();

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.activeTabChange.emit(tab);
  }

}
