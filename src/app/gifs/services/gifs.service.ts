import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../../../environments/environment.prod';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);
  private currentTagHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  // Array Tags History
  get tagsHistory(): string[] {
    return [...this.currentTagHistory];
  }

  // How organize the tags history

  private organizeTagsHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this.currentTagHistory.includes(tag)) {
      this.currentTagHistory = this.currentTagHistory.filter((t) => t !== tag);
    }
    this.currentTagHistory.unshift(tag);
    this.currentTagHistory = this.tagsHistory.splice(0, 9);
    this.saveLocalStore();
  }

  // Save Local Storage
  private saveLocalStore() {
    localStorage.setItem('tagsHistory', JSON.stringify(this.currentTagHistory));
  }

  // Load Local Storage
  private loadLocalStorage() {
    if (!localStorage.getItem('tagsHistory')) return;
    this.currentTagHistory = JSON.parse(localStorage.getItem('tagsHistory')!);

    if (this.currentTagHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);
  }

  // Search Tag fetch
  async searchTag(tag: string) {
    if (tag.length <= 2) return;
    this.organizeTagsHistory(tag);
    this.http
      .get<SearchResponse>(
        `${environment.apiUrl}${environment.apiKey}&q=${tag}&limit=12`
      )
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }
}
