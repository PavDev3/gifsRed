import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  standalone: true,
  template: `
    <form>
      <input
        type="text"
        class="form-control my-2"
        placeholder="Search Gifs..."
      />
    </form>
  `,
})
export class SearchBoxComponent {}
