import { Component, OnInit } from '@angular/core';
import { GoService } from '../../go.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  constructor(private _goService:GoService, private _route:ActivatedRoute, private _router:Router) { 
  }

  ngOnInit() {
  }

  clickery(){
    console.log("This component allows you to type in an address in order to submit it to a geolocation API!")
  }
}

