import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name:'hide'
})
export class showpassword implements PipeTransform{

    transform(value:string,cambiar:boolean):string{
        if(cambiar){
          let aux ="";

          for(let i=0;i<value.length;i++){
            aux += '*';
          }
          return aux;
        }else{
          return value;
        }
    }
}
