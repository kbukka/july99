
 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

   
  constructor(private http: HttpClient) { }

  register(userData){
  return  this.http.post<any>('http://localhost:3000/enroll',userData);
  }

  getById(id)
  {
    return  this.http.get<any>('http://localhost:3000/login',id);  
  }
  
  forgotPassword(userData)
  {
    return this.http.put('http://localhost:3000/forgot',userData);
  }

}
