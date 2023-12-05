// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: ServicesService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password);
  }

 
}
