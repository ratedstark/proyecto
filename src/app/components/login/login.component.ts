import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string;
  password:string;

  constructor(private api:ApiService,
              private router:Router) { }
  mensaje = false;

  ngOnInit() {

  }

  async login(){
    const body = {
      email:this.correo,
      password:this.password,
    };

    this.api.login(body).subscribe((data:any)=>{
      this.router.navigate(['Principal']);

    },error=>{
      this.mensaje = true;
      setTimeout(()=>{
        this.mensaje = false;
      },4000);
    });
  }
}
