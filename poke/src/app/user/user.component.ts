import { Component, OnInit } from '@angular/core';
import { GoService } from '../go.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private _goService:GoService, private _route:ActivatedRoute, private _router:Router) { 
    
  }

  ngOnInit() {
  }

  clickery(){
    console.log("This component contains the user profile! Wheeeeee!")
  }
}
