import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { RegisterValidator } from '../register.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: any;

  constructor(private fb: FormBuilder, private registrationService : RegistrationService, private rt:Router ){}
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*$')]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    phoneNumber:['',[Validators.required,Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$'),Validators.minLength(10)]],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:[''],
    })
  },{
    validator: RegisterValidator.MatchPassword
  
  });
  
  onSubmit(){
    console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value)
    .subscribe(
      response =>
      {
        alert('Registration Successfull!')
         this.rt.navigate(['/login'])
      },
      error =>console.log('Error!',error),
      
      
    );
  }
  

  ngOnInit() {
  }

}
