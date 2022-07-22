import { Component, OnInit } from '@angular/core';
import { ItemApiService } from '../item-api.service';

import { Item } from '../models/Item';
import { FilterService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css'],
})
export class ViewItemsComponent implements OnInit {
  title = 'List of Items';
  items: Array<any> = [];
  itemApiService: ItemApiService;
  filterService: FilterService;

  cols :any[] = []
  totalRecords :number = 0
  loading :boolean = true;

  options!: Array<MenuItem>;

  itemId: number = 0;

  isUpdateOn: boolean = false;

  itemFormData :Item;
  weights :number[];
  weightTypes :string[];
  zoneIds: number[];
  aisles: number[];

  constructor(
    itemApiService: ItemApiService,
     filterService: FilterService,
     messageService: MessageService
  ) {
    this.itemApiService = itemApiService;
    this.filterService = filterService
    this.itemFormData = new Item();

    this.weights = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    this.weightTypes = ["Bar", "Dumbbell", "Kettlebell", "Medicine Ball", "Plates" ]
    this.zoneIds = [1,2,3]
    this.aisles = [1, 2, 3, 4, 5, 6, 7, 8]
  }

  ngOnInit(): void {
    this.itemApiService.findAll().subscribe((resp) => {
      this.items = resp;
    });

    this.options = [
      {label: 'Update', icon: 'pi pi-refresh', command: ()=>{this.isUpdate()} },
      {label: 'Delete', icon: 'pi pi-minus-circle', command: () => {this.deleteItem(this.itemId)}}
    ]
    
    this.loading = false;

    this.cols = [
      {field: 'itemName', header: 'Item Name'}, 
      {field: 'weight', header: 'Weight'}, 
      {field: 'weightType', header: 'Type'}, 
      {field: 'zoneId', header: 'Zone'}, 
      {field: 'aisle', header: 'Aisle'} 
    ]

    this.totalRecords = this.items.length
    
    

    const value = 'PrimeNG';
    this.filterService.filters.equals(value, 'NG');
    this.filterService.filters.equals(value, 8); //false
    this.filterService.filters.equals(value, new Date()); //false
    this.filterService.filters.contains(value, 'NG'); //true
    this.filterService.filters.startsWith(value, 'NG'); //false
    this.filterService.filters.endsWith(value, 'NG'); //true
    this.filterService.filters.lt(10, 20); //true
    this.filterService.filters.gt(50, 20); //true
    this.filterService.filters.in(value, ['PrimeFaces', 'PrimeNG']); //true

    
  }
  clear(table: Table) {
    table.clear();
  }
  isUpdate(){
    this.isUpdateOn = !this.isUpdateOn
    this.itemApiService.findById(this.itemId).subscribe(resp => this.itemFormData)
  }

  updateItem(item: Item){
    item.itemId = this.itemId
    this.itemApiService.update(item).subscribe(resp => console.log(item))
    this.isUpdateOn = !this.isUpdateOn
  }

  deleteItem(id: number) {
    this.itemApiService.delete(id).subscribe(resp => console.log(id))
  }

  onSelect(selectedItem: Item) {
    console.log(selectedItem.itemId)
    this.itemId = selectedItem.itemId
  }
}
