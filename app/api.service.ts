import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private Http:HttpClient) { }


  get( url : string){

    return this.Http.get(url)
  }

  post( url:string, data:any){
    return this.Http.post(url,data);
  }

  delete(url:string){
    return this.Http.delete(url);
  }
}
