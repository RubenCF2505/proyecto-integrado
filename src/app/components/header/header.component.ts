import { Component, HostListener, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  imgPath = '/assets/images/logo.png';
  progress: any
  constructor() { }
  ngOnInit() {
    this.items = [
      { label: 'Home', id: '' },
      { label: 'Matriculate', id: 'matriculate' },
      { label: 'Choose your teacher', id: 'teachers' },
      { label: 'About us', id: 'aboutUs' },
      { label: 'Teacher Access', id: 'login' },
    ];
    this.checkSize()
  }
  isMobile: boolean = false;
  mobileMenuOpen: boolean = false;

  // ... Existing code

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = window.innerWidth <= 1024;
  }
  checkSize(): void {
if( window.innerWidth <= 1024){
  this.isMobile=true
}
  }




}
