import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';
import { GifsCardListComponent } from '../gifs-card-list/gifs-card-list.component';

@Component({
  selector: 'app-gifs-list',
  standalone: true,
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css',
  imports: [GifsCardListComponent],
})
export class GifsListComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
