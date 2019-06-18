import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
const headers={
  'Content-Type':'application/x-www-form-urlencoded'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://aprendeaprogramar3.firebaseio.com"
  userurl ="https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
  apikey = "AIzaSyAZFCME1iftf5Mv0sldYzpg-BV4Cg6UpbY"



  constructor(private http:HttpClient) { }

  clientes(){
    return this.http.get(this.url + "/clientes.json");
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

