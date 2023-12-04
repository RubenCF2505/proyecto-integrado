import { Component, HostListener } from '@angular/core';
import { TEACHERS } from './mock-teachers';
import { Teacher } from 'src/app/teacher';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent {
  teachers: Teacher[]
  isMobile: boolean;
  isSmallHeight: any

  constructor(private router: Router) {
    this.teachers = TEACHERS
    this.router.navigate(['/teachers'], { state: 'id'.toString })

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkSize()
    this.onResize()
  }
  toggleHeight(teacherId: number) {
    const selectedTeacher = this.teachers.find(teacher => teacher.id === teacherId);
    if (selectedTeacher) {
      selectedTeacher.isSmallHeight = !selectedTeacher.isSmallHeight;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isMobile = window.innerWidth < 1025;
    if (this.isMobile) { 
      this.teachers.map(item=>item.isSmallHeight=true)
    }
  }
  checkSize(): void {
    if (window.innerWidth <= 1024) {
      this.isMobile = true;
    }
  }
}

