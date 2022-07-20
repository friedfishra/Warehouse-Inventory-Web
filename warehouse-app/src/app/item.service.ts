import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems() {
    return ["item1", "item2", "item3"]
  }
  constructor() { }
}
