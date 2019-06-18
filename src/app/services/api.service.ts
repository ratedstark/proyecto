import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://aprendeaprogramar3.firebaseio.com"
  userurl ="https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
  apikey = "AIzaSyAZFCME1iftf5Mv0sldYzpg-BV4Cg6UpbY"



  constructor(private http:HttpClient) { }

  newclient(body:any){
    return this.http.post(this.url + "/aprendeaprogramar3/usuarios.json",body);
  }

  clientes(){
    return this.http.get(this.url + "/aprendeaprogramar3/usuarios.json")
    .pipe(
        map(data=>{
          return this.extractData(data);
        })
    );
  }

  extractData(data:any){
    const users:any[] = [];
    for(let i in data){
      users.push(data[i]);
    }
    return users;
  }

  eliminar(rest:any){
    return this.http.delete(this.url + `/clientes/${rest}.json`);
  }

  login(user:any){
    const data = {
      ...user,
      returnSecureToken:true
    }
    return this.http.post(this.userurl + `verifyPassword?key=${this.apikey}`,data);
  }

  registrar(user:any){

  const data={
     ...user,
     returnSecureToken:true
  }
    return this.http.post(this.userurl + `signupNewUser?key=${this.apikey}`,data);
  }
}

