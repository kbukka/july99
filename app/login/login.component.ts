import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flipped=false;

  constructor(private fb: FormBuilder,private registrationService : RegistrationService,private rt : Router) { }

  loginForm=this.fb.group({
    userName:['',Validators.required],
    password:['']
  });

  onSubmit(){
    console.log(this.loginForm.value);
    this.registrationService.getById(this.loginForm.value)
    .subscribe(
      response =>{alert('Login Successfull!'),
      this.rt.navigate(['/register'])},
      error =>console.log('Error!',error)
      );
  }
    
  ngOnInit() {
  }
}


