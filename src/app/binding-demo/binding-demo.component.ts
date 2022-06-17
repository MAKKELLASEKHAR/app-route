import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {

  id:number=0;
  username:string='';
  city:string='';

  constructor() { }

  ngOnInit(): void {
  }
  display():void {

    console.log(this.id);
    console.log(this.username);
    console.log(this.city);

  }

}
