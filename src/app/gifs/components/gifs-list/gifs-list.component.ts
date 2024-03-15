import { Component } from '@angular/core';
import { GifsCardListComponent } from '../gifs-card-list/gifs-card-list.component';

@Component({
  selector: 'app-gifs-list',
  standalone: true,
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css',
  imports: [GifsCardListComponent],
})
export class GifsListComponent {}
