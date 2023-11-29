import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { TEACHERS } from '../teachers/mock-teachers';
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  teachers = TEACHERS
  constructor(private service: ServicesService) { }
  selectedItemId: number | null = null; // Initialize as null or any default value


  // Function to handle item click
  handleItemClick(itemId: number) {
    this.selectedItemId = itemId; // Set the selected item ID when clicked
  }
  onLogout() {
    this.service.logout()
  }
}
