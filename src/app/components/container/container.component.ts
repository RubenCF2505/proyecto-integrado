import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  constructor(public readonly service: ServicesService) {}
  imgPath = '/assets/images/logo.png';

  ngOnInit(): void {
    
    const image = document.getElementsByClassName("sunset");
    new simpleParallax(image,{scale:1.3});
  
  }
}
