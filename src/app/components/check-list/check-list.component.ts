import { Component } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { TEACHERS } from '../teachers/mock-teachers';
<<<<<<< Updated upstream
import { Student } from 'src/app/student';
=======

>>>>>>> Stashed changes
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
})
export class CheckListComponent {
  teachers = TEACHERS;
  constructor(private service: ServicesService) {}
  selectedItemId: number | null = null; // Initialize as null or any default value
<<<<<<< Updated upstream
  savedStudents: any[] = [];
  keys: string[] = [];
  showedStudents:string[]=[]
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getStudents().subscribe((data: any) => {
      this.service.students = data;
      this.keys = Object.keys(data[0]);
      this.keys.push("")

      data.forEach((element:any)=>{
 //element es lo que hay que pasar a array
        this.savedStudents.push(Object.values(element))
      
      })
    });
    this.showedStudents=this.savedStudents
  }



  // Ordenar

  // Listar con el nuevo order

  // Call the function to get the sorted array
  find(item: number) {
    
    this.showedStudents = this.savedStudents.filter(arr => arr[14].includes(item));
    
  }
  sortObject(inputObject: any, order: string[]): any {
    const sortedObject: any = {};
    order.forEach((key) => {
      if (inputObject.hasOwnProperty(key)) {
        sortedObject[key] = inputObject[key];
      }
    });
    return sortedObject;
  }
=======
  students: string[];
  keys:string[]
>>>>>>> Stashed changes
  // Function to handle item click
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setStudents()
  }
  setStudents() {
    this.service.getAlumnos().subscribe((data) => {
      this.students = data;
      console.log(this.students);
      
      this.keys = Object.keys(data);
    });
  }

  handleItemClick(itemId: number) {
<<<<<<< Updated upstream
    this.find(itemId)
    this.selectedItemId = itemId; // Set the selected item ID when clicked
=======
    this.selectedItemId = itemId;
    return this.selectedItemId; // Set the selected item ID when clicked
>>>>>>> Stashed changes
  }
  
  onLogout() {
    this.service.logout();
  }
}
