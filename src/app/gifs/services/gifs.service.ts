import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private currentTagHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this.currentTagHistory];
  }

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

  public searchTag(tag: string) {
    if (tag.length <= 2) return;
    this.organizeTagsHistory(tag);

    this.currentTagHistory.unshift(tag);
    console.log(this.currentTagHistory);
  }
}
