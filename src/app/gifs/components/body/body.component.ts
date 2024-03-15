import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../../../shared/components/sideBar/side-bar.component';
import { GifsListComponent } from '../gifs-list/gifs-list.component';

@Component({
  selector: 'app-gifs-body',
  standalone: true,
  templateUrl: './body.component.html',
  imports: [CommonModule, SideBarComponent, GifsListComponent],
})
export class BodyComponent {}
