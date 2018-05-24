import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MapComponent } from './home/map/map.component'
import { UserComponent } from './user/user.component';
import { ResultComponent} from './home/result/result.component';
import { AddressComponent } from './home/address/address.component';

const routes: Routes = [
  {path: '', pathMatch:'full',component: HomeComponent},
  {path: 'user',component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
