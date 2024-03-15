import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../../../shared/components/sideBar/side-bar.component';

@Component({
  selector: 'app-gifs-body',
  standalone: true,
  templateUrl: './body.component.html',
  imports: [CommonModule, SideBarComponent],
})
export class NameComponent {}
