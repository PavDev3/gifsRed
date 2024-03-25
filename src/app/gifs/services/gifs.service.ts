import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { _apiUrl, _apikey } from '../../../../environments/environment';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);
  private currentTagHistory: string[] = [];
  public gifList: Gif[] = [];

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
    this.saveLocalStore();
  }

  private saveLocalStore() {
    localStorage.setItem('tagsHistory', JSON.stringify(this.currentTagHistory));
  }

  constructor() {}

  // Search Tag fetch
  async searchTag(tag: string) {
    if (tag.length <= 2) return;
    this.organizeTagsHistory(tag);
    this.http
      .get<SearchResponse>(`${_apiUrl}${_apikey}&q=${tag}&limit=10`)
      .subscribe((response) => {
        this.gifList = response.data;
      });
    this.currentTagHistory.unshift(tag);
  }
}
