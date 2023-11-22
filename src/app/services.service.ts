import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TEACHERS } from './components/teachers/mock-teachers';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost/api/login.php';
  private isLoggedInFlag = false;
  cookie:string
  user:string
  items = [
    { label: 'Home', id: 'home' },
    { label: 'Matriculate', id: 'matriculate' },
    { label: 'Choose your teacher', id: 'teachers' },
    { label: 'About us', id: 'aboutUs' },
    { label: 'Teacher Access', id: 'login' },
  ];
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
  public containerStyle = new BehaviorSubject<boolean>(true);

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    this.http.post(this.apiUrl, formData).subscribe((response: any) => {
      if (response.status === 'success') {                
        this.user=username
        this.cookieService.set('cookie',response.token)
        this.router.navigate(['/checkList']);
        this.items[4].id='checkList'
        this.items[4].label='Alumnos'
      }
      });
  }

  isLoggedIn(): string {
    return this.cookieService.get('cookie')
  }

  setLoggedIn(value: boolean) {
    this.isLoggedInFlag = value;
  }
  logout(){
    this.cookieService.delete('cookie')
  }
  getUser(){
    return this.user
  }

}
