import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemApiService } from '../item-api.service';
import { Item } from '../models/Item';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  itemFormData: Item
  weights :number[];
  weightTypes :string[];
  zoneIds: number[];
  aisles: number[];
  selectedWeight!: number;
  

  service: ItemApiService
  constructor(service: ItemApiService, private router: Router) { 
    this.itemFormData = new Item()
    this.weights = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    this.weightTypes = ["Bar", "Dumbbell", "Kettlebell", "Medicine Ball", "Plates" ]
    this.zoneIds = [1,2,3]
    this.aisles = [1, 2, 3, 4, 5, 6, 7, 8]

    this.service = service
  }

  ngOnInit(): void {
  }

  update() :void {
    
    this.service.update(this.itemFormData).subscribe(resp => console.log(resp))
    this.router.navigate(['/view'])
    
  }

}
