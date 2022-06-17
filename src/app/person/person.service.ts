import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseURL:string="http://localhost:8080/person";

  constructor(private http:HttpClient) { }
}
