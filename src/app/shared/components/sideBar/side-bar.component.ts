import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../searchBox/searchBox.component';
import { GifsService } from './../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sideBar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  imports: [SearchBoxComponent, CommonModule],
})
export class SideBarComponent {
  constructor(private GifsService: GifsService) {}

  get tagsHistory() {
    return this.GifsService.tagsHistory;
  }

  onClick(tag: string) {
    this.GifsService.searchTag(tag);
  }
}
