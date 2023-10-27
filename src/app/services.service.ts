import { Injectable, Input } from '@angular/core';
import { TeachersComponent } from './components/teachers/teachers.component';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TEACHERS } from './components/teachers/mock-teachers';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getTeacherById(id: number):Observable<string> {
    const url=`/matriculate/${id}`;
    return this.http.get<string>(url).pipe(
      tap((_)=>console.log(id))
      )
  }
   getTeachers(){
     return TEACHERS
  }
}
