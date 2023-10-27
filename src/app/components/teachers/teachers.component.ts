import { Component } from '@angular/core';
import { TEACHERS } from './mock-teachers';
import { Teacher } from 'src/app/teacher';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent {
  teachers:Teacher[]
constructor(private router:Router){
  this.teachers=TEACHERS
  this.router.navigate(['/teachers'],{state:'id'.toString})
  
}

}
