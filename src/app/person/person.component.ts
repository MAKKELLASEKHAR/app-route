import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  defaultcountry:string="India";
  countries:string[]=["India","Srilanka","Germany","France","Uganda","USA","UK","Canada"];
  personForm=new FormGroup({
  firstname: new FormControl('',Validators.required),
  lastname : new FormControl('',[Validators.required,Validators.minLength(4)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  gender:new FormControl('',Validators.required),
  country:new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }
  display():void{
    console.log(this.personForm.value);
   }
   get firstname(){
    return this.personForm.get('firstname');
   }
   get lastname(){
    return this.personForm.get('lastname');
   }
   get email(){
    return this.personForm.get('email');
   }
   get gender(){
    return this.personForm.get('gender');
   }
   get country(){
    return this.personForm.get('country');
   }
}