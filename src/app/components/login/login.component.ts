// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

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
    this.authService.login(this.username, this.password)
      .subscribe(response => {
        console.log(response);
        
        if (response.status === 'success') {
          this.authService.setLoggedIn(true);
          this.router.navigate(['/checkList']);
        } else {
          // Handle other cases if needed
        }
      }, error => {
        console.error(error);
        // Handle the error, e.g., show an error message to the user
      });
  }
  onLogout() {
    this.authService.setLoggedIn(false);
    // Other logout logic...
  }
}
