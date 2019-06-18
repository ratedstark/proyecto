import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService} from '../../services/api.service';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  @Output() close: EventEmitter<{}> = new EventEmitter <{}>();

  constructor(private api:ApiService) { }
  id;

  ngOnInit() {
  }

  eliminar(){
    this.api.eliminar(this.id);
  }

  onClose(){
    this.close.emit({value:false})
  }

}
