import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any;

constructor(private api:ApiService){

}

ngOnInit(): void {
  this.api.get("https://64102283864814e5b648469a.mockapi.io/api/v1/users").subscribe((result:any)=>{
    this.users = result;
  })
}


delete(id:any){
if(confirm("sure to delete?")){
  this.api.delete("https://64102283864814e5b648469a.mockapi.io/api/v1/users" + id).subscribe((result:any)=>{
    alert("Delete")
  })
}
}

}
