import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  hideHeader = false;

  constructor(private router: Router, private service: ServicesService) {}

  ngOnInit() {
    this.service.hideHeaderOnSpecificRoute().subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide the header if needed
        this.hideHeader = event.urlAfterRedirects === '/';
      }
    });
  }
}
