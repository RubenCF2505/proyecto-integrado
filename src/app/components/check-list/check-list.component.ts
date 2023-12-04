import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { TEACHERS } from '../teachers/mock-teachers';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
})
export class CheckListComponent {
  teachers = TEACHERS;
  constructor(
    public service: ServicesService,
    private formBuilder: FormBuilder
  ) {
    this.service.getStudents().subscribe((data: any) => {
      this.service.students = data;
      this.keys = Object.keys(data[0]);
      this.keys.push('');

      data.forEach((element: any) => {
        //element es lo que hay que pasar a array
        this.savedStudents.push(Object.values(element));
        this.form.addControl(element.DNI, new FormControl(false));
      });
    });
    this.showedStudents = this.savedStudents;
  }
  selectedItemId: number | null = null; // Initialize as null or any default value
  savedStudents: any[] = [];
  keys: string[] = [];
  showedStudents: string[] = [];
  selectedValues: boolean[] = [];
  form: FormGroup = this.formBuilder.group({});
  ngOnInit() {
    this.service.checkValue(this.form);
  }

  find(item: number) {
    this.showedStudents = this.savedStudents.filter((arr) =>
      arr[14].includes(item)
    );
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

  

  reset() {
    this.showedStudents = this.savedStudents;
  }

  handleItemClick(itemId: number) {
    this.find(itemId);
    this.selectedItemId = itemId;
  }

  onLogout() {
    this.service.logout();
  }
}
