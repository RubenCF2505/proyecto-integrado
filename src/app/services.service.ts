import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { TEACHERS } from './components/teachers/mock-teachers';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost/api/login.php';
  private isLoggedInFlag = false;
  cookie:string

  constructor(private http: HttpClient, private cookieService: CookieService,private router:Router) {}

  getTeacherById(id: number): Observable<string> {
    const url = `/matriculate/${id}`;
    return this.http.get<string>(url);
  }
  getTeachers() {
    return TEACHERS;
  }
  getImages() {
    return;
  }
  public containerStyle = new BehaviorSubject<boolean>(false);

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    this.http.post(this.apiUrl, formData).subscribe((response: any) => {
      if (response.status === 'success') {
        localStorage.setItem('auth_token', response.token);
        
        this.cookieService.set('cookie',response.token)
        this.router.navigate(['/checkList']);
      }
      // Handle other cases if needed
    });
  }

  isLoggedIn(): string {
    return this.cookieService.get('cookie')
  }

  setLoggedIn(value: boolean) {
    // Update the isLoggedInFlag and set the cookie
    
    this.isLoggedInFlag = value;


  }
  logout(){
    this.cookieService.delete('cookie')
  }
}
