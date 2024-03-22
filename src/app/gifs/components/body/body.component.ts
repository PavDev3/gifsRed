import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../../../shared/components/sideBar/side-bar.component';
import { GifsListComponent } from '../gifs-list/gifs-list.component';
import { Gif } from './../../interfaces/gifs.interfaces';
import { GifsService } from './../../services/gifs.service';

@Component({
  selector: 'app-gifs-body',
  standalone: true,
  templateUrl: './body.component.html',
  imports: [CommonModule, SideBarComponent, GifsListComponent],
})
export class BodyComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
