import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { ApiService} from '../../services/api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  @Output() close: EventEmitter<{}> = new EventEmitter <{}>();

  nombre;
  correo;
  telefono

  constructor(private api:ApiService,
              private router:Router) { }

  ngOnInit() {
  }

  onClose(){
    this.close.emit({value:false})
  }

  agregar(){
    const body={
      id:"",
      email:this.correo,
      nombre:this.nombre,
      telefono:this.telefono
    }

    this.api.newclient(body).subscribe(data=>{
        this.onClose();
    });
  }
}

