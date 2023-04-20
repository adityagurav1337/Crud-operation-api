import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  formdata:any;

  constructor(private api:ApiService, private route:Router){

  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl("asdas",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
        mobileno:new FormControl("",Validators.compose([Validators.required]))
    })
  }

  submit(data:any){
this.api.post("https://64102283864814e5b648469a.mockapi.io/api/v1/users",data).subscribe ((result:any)=>{
  console.log(result);
  
this.route.navigate(['/'])
})
  }
}
