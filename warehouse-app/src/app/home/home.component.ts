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

  constructor(private itemApiService: ItemApiService) { }

  ngOnInit(): void {
    this.getItemCountInZoneOne()
    this.getItemCountInZoneTwo()
    this.getItemCountInZoneThree()
    
  }
  getItemCountInZoneOne() :void{
    
    this.itemApiService.getItemCount(1).subscribe(resp => this.zone1 = resp);
    console.log(this.zone1)
  }

  getItemCountInZoneTwo() :void{
    
    this.itemApiService.getItemCount(2).subscribe(resp => this.zone2 = resp);
    
  }

  getItemCountInZoneThree() :void{
    
    this.itemApiService.getItemCount(3).subscribe(resp => this.zone3 = resp);
    
  }

}
