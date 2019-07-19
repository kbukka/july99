import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userName: string,password:string){
    return this.http.post<any>('http://localhost:3000/login',{userName : userName, password : password})
    .pipe(map(user =>{
      if (user && user.token){
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    }));
  }
logout(){
  localStorage.removeItem('currentUser');
}
}
