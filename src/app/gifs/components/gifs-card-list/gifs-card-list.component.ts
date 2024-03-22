import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  standalone: true,
  selector: 'gifs-card-list',
  templateUrl: './gifs-card-list.component.html',
})
export class GifsCardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
