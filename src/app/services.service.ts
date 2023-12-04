import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { TEACHERS } from './components/teachers/mock-teachers';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost/api/';
  cookie: string;
  user: string;
  items = [
    { label: 'Home', id: 'home' },
    { label: 'Matriculate', id: 'matriculate' },
    { label: 'Choose your teacher', id: 'teachers' },
    { label: 'About us', id: 'aboutUs' },
  ];
  trueValues: string[];
  students: any[] = [];
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    if (this.isLoggedIn().length > 0) {
      this.items.push({ label: 'Alumnos', id: 'checkList' });
    } else {
      this.items.push({ label: 'Teacher Access', id: 'login' });
    }
  }
 

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

    this.http
      .post(this.apiUrl + 'login.php', formData)
      .subscribe((response: any) => {
        if (response.status === 'success') {
          this.user = username;
          this.cookieService.set('cookie', response.token);
          this.router.navigate(['/checkList']);
          this.items[4].id = 'checkList';
          this.items[4].label = 'Alumnos';
        }
      });
  }

  deleteData(values: any) {
    return this.http.post(`${this.apiUrl}delete.php`, values)
  }
  saveFormData(formData: any): Observable<any> {
    this.students.push(formData);

    return this.http.post(`${this.apiUrl}add.php  `, formData);
  }

  hideHeaderOnSpecificRoute() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
  }

  isLoggedIn(): string {
    return this.cookieService.get('cookie');
  }
  logout() {
    this.cookieService.delete('cookie');
    this.items[4].label = 'Teacher Access';
    this.items[4].id = 'login';
  }
  getUser() {
    return this.user;
  }
  getStudents() {
    return this.http.get(`${this.apiUrl}search.php`);
  }
}
