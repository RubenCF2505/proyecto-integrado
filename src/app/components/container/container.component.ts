import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import simpleParallax from 'simple-parallax-js';
import { TEACHERS } from '../teachers/mock-teachers';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  constructor(public readonly service: ServicesService) {}
  imgPath = '/assets/images/logo.png';
  images: { imagen: string; titulo: string; texto: string }[] = [
    { imagen: '/assets/images/jumping-goku.gif', titulo: 'Calentamiento', texto: 'Nunca olvides calentar antes de un intenso entrenamiento' },
    { imagen: '/assets/images/img1.gif', titulo: 'Estudio', texto: 'Para entrenar el cuerpo antes hay que entrenar la mente' },
    { imagen: '/assets/images/img2.gif', titulo: 'Compañerismo', texto: 'No hay mayor fuerza que el compañerismo y la amistad' },
  ];

  showedTeachers:Teacher[]=TEACHERS.slice(0,3)
 
  text: string = 'Calienta antes de entrenar';
  ngOnInit(): void {
    const image = document.getElementsByClassName('sunset');
    new simpleParallax(image);
  }

}
