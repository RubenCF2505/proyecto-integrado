import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) { }
  form = this.formBuilder.group({
    username: [''],
    password: ['']
  })
  onSubmit(){
    console.log(this.form);
    
  }
}
