import { Component, OnInit,Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private api:ApiService,
              private location:Location) { }

  res:any;
  nombre:string;
  correo:string;
  password:string;

  mostrar = false;
  error = false;
  ngOnInit() {
  }

  async registrar(){
      const body={
        nombre:this.nombre,
        email:this.correo,
        password:this.password
      }

      await this.api.registrar(body).subscribe((data:any)=>{
          this.mostrar = true;
          setTimeout(()=>{this.mostrar=false},3000);
      },error=>{
          this.error = true;
          setTimeout(()=>{this.error=false},4000);
      });
  }

  back(){
    this.location.back();
  }

}
