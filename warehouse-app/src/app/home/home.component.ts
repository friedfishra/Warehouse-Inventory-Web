import { Component, OnInit } from '@angular/core';
import { ItemApiService } from '../item-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zone1: number = -1;
  zone2: number = -1;
  zone3: number = -1;
  itemCount: number = -1
  capacity1: number = 100
  capacity2: number = 200
  capacity3: number = 100

  constructor(private itemApiService: ItemApiService) { }

  ngOnInit(): void {
    this.getItemCountInZoneOne()
    this.getItemCountInZoneTwo()
    this.getItemCountInZoneThree()
    
  }
  getItemCountInZoneOne() :void{
    
    this.itemApiService.getItemCount(1).subscribe(
      (resp) => {
        this.zone1 = resp
        this.capacity1 = this.capacity1 - this.zone1
      });
    
    console.log(this.zone1)
  }

  getItemCountInZoneTwo() :void{
    
    this.itemApiService.getItemCount(2).subscribe(resp => {
      this.zone2 = resp
      this.capacity2 = this.capacity2 - this.zone2
    });
    
  }

  getItemCountInZoneThree() :void{
    
    this.itemApiService.getItemCount(3).subscribe(resp => {
      this.zone3 = resp
      this.capacity3 = this.capacity3 - this.zone3
    });
    
  }

}
