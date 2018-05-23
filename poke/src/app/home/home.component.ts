import { Component, OnInit } from '@angular/core';
import { GoService } from '../go.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  test;
  constructor(private _goService:GoService, private _route:ActivatedRoute, private _router:Router) { 
    this.test = "";
    
  }

  ngOnInit() {
    this.getTestJson();
  }

  getTestJson(){
    let observable = this._goService.getTest();
    observable.subscribe(data => {
      console.log("Successful json return is successful");
      this.test = data;
    })
  }
  // getProductsFromService(){
  //   let observable = this._beltService.getProducts();
  //      observable.subscribe(data => {
  //         console.log("Got our products", data)
  //         // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
  //         // This may be different for you, depending on how you set up your Task API.
  //         this.products = data;
  //      });
  // }
}
