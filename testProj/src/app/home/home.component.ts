import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {SignalRService} from "../singalR.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [HomeService, SignalRService]

})
export class HomeComponent implements OnInit {


  endpointCount: number;

  constructor(private homeService: HomeService) {


  }

  ngOnInit() {

    this.homeService.endpointCount$.subscribe(data => { this.endpointCount = data; console.log(data); });

    this.homeService.changeCount();

  }

  public mapExample()
  {
    //map
    console.log(" ************** map() ****************");

    let myValues = [8, 78, 32 ];

    let newValues = myValues.map(function(value){
      return value - 5;
    });

    console.log("New Values map()  : ", newValues);
  }

  public filterExample()
  {
    //filter
    console.log(" ************** filter() ****************");
    let myValues = [8, 78, 32 ];

    let newValues = myValues.filter(function(value){

      return (value === 78);


    }).map(function(value){
      return value - 5;
    });

    console.log("New Values filter()  : ", newValues);
  }

  /**
   * return one value based on a calculation
   */
  public reduceExample()
  {
    //reduce
    console.log(" ************** reduce() ****************");
    let myValues = [8, 78, 32 ];

    let newVal = myValues.map(function(value){
      return value - 5;
    }).reduce(function(total, value){
      return total + value;
    }, 0);

    console.log("newVal reduce() : ", newVal);
  }

  public forEachExample()
  {
    //forEach
    console.log(" ************** forEach() ****************");
    let vals = ['A', 'b', 'C', '4'];

    vals.forEach(function(val){
      console.log(" Val : "+val);
    });
  }
}
