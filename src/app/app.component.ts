import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsListComponent } from './gifs/components/gifs-list/gifs-list.component';
import { SideBarComponent } from './shared/components/sideBar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SideBarComponent, GifsListComponent],
})
export class AppComponent {
  title = 'gifsRed';
}
