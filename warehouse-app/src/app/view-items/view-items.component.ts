import { Component, OnInit } from '@angular/core';
import { ItemApiService } from '../item-api.service';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';
import { FilterService } from 'primeng/api';
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

  options: MenuItem[] = [];

  constructor(
    itemApiService: ItemApiService,
     filterService: FilterService
  ) {
    this.itemApiService = itemApiService;
    this.filterService = filterService
  }

  ngOnInit(): void {
    this.itemApiService.findAll().subscribe((resp) => {
      this.items = resp;
    });

    this.options = [
      {label: 'Update', icon: 'pi pi-refresh', command: () =>{}},
      {label: 'Delete', icon: 'pi pi-minus-circle', command: () => {}}
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
}
