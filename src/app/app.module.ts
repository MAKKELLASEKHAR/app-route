import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshComponent } from './fresh/fresh.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ComputersComponent } from './computers/computers.component';
import { ToysComponent } from './toys/toys.component';
import { RouterModule } from '@angular/router';
import { SimcardComponent } from './simcard/simcard.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FreshComponent,
    MobilesComponent,
    ComputersComponent,
    ToysComponent,
    SimcardComponent,
    BindingDemoComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
