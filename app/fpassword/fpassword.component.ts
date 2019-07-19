import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { RegisterValidator } from '../register.validators';


@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private registrationService : RegistrationService,private rt :Router) { }
  forgotForm=this.fb.group({
   
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]], 
  },
  {
  validator: RegisterValidator.MatchPassword
  
});
  
  onSubmit(){
    console.log(this.forgotForm.value);
    this.registrationService.forgotPassword(this.forgotForm.value)
    .subscribe(
      response =>
      {
        alert('Password has sent to ur Mail!')
         this.rt.navigate(['/login'])
      },
      error =>console.log('Error!',error),
      
      
    );
  }

  ngOnInit() {
  }

}
