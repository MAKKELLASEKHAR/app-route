import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshComponent } from './fresh/fresh.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ToysComponent } from './toys/toys.component';
import { ComputersComponent } from './computers/computers.component';
import { SimcardComponent } from './simcard/simcard.component';

const routes: Routes = [
  {path:'fresh', component:FreshComponent},
  {path:'mobiles', component:MobilesComponent ,children:[{path:'simcard' , component:SimcardComponent}]},
  {path:'computers', component:ComputersComponent},
  {path:'toys', component:ToysComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
