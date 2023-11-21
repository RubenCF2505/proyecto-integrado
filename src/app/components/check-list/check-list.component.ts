import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  constructor(private service:ServicesService){}
  user=this.service.getUser()
  onLogout() {
this.service.logout()
  }
}
