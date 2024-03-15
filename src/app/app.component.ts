import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './gifs/components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NameComponent],
})
export class AppComponent {
  title = 'gifsRed';
}
