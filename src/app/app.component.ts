import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public service:ServicesService, private route:ActivatedRoute) {
    
  }
  title = 'proyecto';
  aaa:string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.route.snapshot.url);
    
  }
}
