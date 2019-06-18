import { Component, OnInit ,Output} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private api:ApiService,
              private location:Location) { }
  data:any;

  @Output() eliminar=false;
  @Output() registrar=false;
  @Output() modificar=false;
  @Output() agregar=false;


   ngOnInit() {
     this.api.clientes().subscribe(data=>{
      this.data = data;
     });
  }

  delete(event){
    this.eliminar = event.value;
  }

  update(event){
    this.modificar= event.value;
  }

  back(){
    this.location.back();
  }

  create(event){
    this.agregar = event.value;
  }


}
