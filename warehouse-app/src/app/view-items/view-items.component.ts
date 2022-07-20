import { Component, OnInit } from '@angular/core';
import { ItemApiService } from '../item-api.service';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  title = "List of Items"
  items :Array<any> = []
  itemApiService :ItemApiService

  constructor(itemApiService :ItemApiService) {
    
    this.itemApiService = itemApiService

   }


  ngOnInit(): void {
    this.itemApiService.findAll().subscribe(resp => {
      this.items = resp;
    });
  }

}
