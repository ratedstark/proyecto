import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Output() close: EventEmitter<{}> = new EventEmitter <{}>();

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.close.emit({value:false});
  }

}
