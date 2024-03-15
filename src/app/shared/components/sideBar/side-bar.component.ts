import { Component } from '@angular/core';
import { SearchBoxComponent } from '../searchBox/searchBox.component';

@Component({
  selector: 'shared-sideBar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  imports: [SearchBoxComponent],
})
export class SideBarComponent {}
