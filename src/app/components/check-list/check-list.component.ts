import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { TEACHERS } from '../teachers/mock-teachers';
import { Student } from 'src/app/student';
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  teachers = TEACHERS
  constructor(private service: ServicesService) { }
  selectedItemId: number | null = null; // Initialize as null or any default value
  savedStudents:string[]=[]
  keys:string[]
ngOnInit(){
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.service.getStudents().subscribe((data:any)=>{
    this.service.students=data
    console.log(data);
    
    this.keys=Object.keys(data[0])
    this.savedStudents=data
  })

  
  
}
  // Function to handle item click
  handleItemClick(itemId: number) {
    this.selectedItemId = itemId; // Set the selected item ID when clicked
  }
  onLogout() {
    this.service.logout()
  }
  
}
