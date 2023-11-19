import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TEACHERS } from './components/teachers/mock-teachers';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost/api/login.php';
  private isLoggedInFlag = false;
  private readonly cookieName = 'userLoggedIn';
  constructor(private http:HttpClient, private cookieService: CookieService) { }

  getTeacherById(id: number):Observable<string> {
    const url=`/matriculate/${id}`;
    return this.http.get<string>(url)
  }
   getTeachers(){
     return TEACHERS
  }
  getImages(){
    return 
  }
  public containerStyle= new BehaviorSubject<boolean>(false)



  login(username: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    
    return this.http.post(this.apiUrl, formData);
  }
  isLoggedIn(): boolean {
    // Return the current value of the isLoggedInFlag
    return this.isLoggedInFlag;
  }

  setLoggedIn(value: boolean) {
    // Update the isLoggedInFlag and set the cookie
    this.isLoggedInFlag = value;
    this.cookieService.set(this.cookieName, String(value));
    console.log(this.cookieName);
    
  }
  
}
