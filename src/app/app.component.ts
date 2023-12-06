import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public service: ServicesService, private route: ActivatedRoute) {}
  title = 'proyecto';
  hideHeader = false;

  ngOnInit() {
    this.service.hideHeaderOnSpecificRoute().subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide the header if needed
        this.hideHeader = event.urlAfterRedirects === '/NotFound';
      }
    });
  }
}
