import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { _apiUrl, _apikey } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);
  private currentTagHistory: string[] = [];

  // Array Tags History
  get tagsHistory(): string[] {
    return [...this.currentTagHistory];
  }

  // How organize the tags history
  private organizeTagsHistory(tag: string) {
    tag = tag.toLowerCase();
    const index = this.currentTagHistory.findIndex(
      (t) => t.toLowerCase() === tag
    );
    if (index !== -1) {
      this.currentTagHistory.splice(index, 1);
    }
    this.currentTagHistory = this.tagsHistory.splice(0, 9);
  }

  constructor() {}

  // Search Tag
  async searchTag(tag: string) {
    if (tag.length <= 2) return;
    this.organizeTagsHistory(tag);
    this.http
      .get(`${_apiUrl}${_apikey}&q=${tag}&limit=10`)
      .subscribe((response) => console.log(response));
    this.currentTagHistory.unshift(tag);
  }
}
