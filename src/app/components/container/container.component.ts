import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{

  constructor(public readonly service: ServicesService){}
  imgPath="/assets/images/logo.png"

  toggle(){
    this.service.containerStyle.asObservable().subscribe(x=>{
      if(x){

      }else{

      }
      
    })
  }
  ngOnInit(): void {
    this.toggle()
  }  
}
