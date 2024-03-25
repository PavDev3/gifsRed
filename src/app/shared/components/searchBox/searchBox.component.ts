import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'search-box',
  standalone: true,
  template: `
    <input
      type="text"
      class="form-control my-2"
      placeholder="Search..."
      (keyup.enter)="searchTag()"
      #newTag
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('newTag')
  public newTag!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.newTag.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.newTag.nativeElement.value = '';
  }
}
