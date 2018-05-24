import { Component, OnInit } from '@angular/core';
import { GoService } from '../../go.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private _goService:GoService, private _route:ActivatedRoute, private _router:Router) { 
  }

  ngOnInit() {
  }

  clickery(){
    console.log("This component displays the map, which is changed depending on what address is inputted from the address component!")
  }
}
