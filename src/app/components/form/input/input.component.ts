import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() type:string;
  //address=this.form.get('address')!.value

  @Input() controlName: string;
  @Input() label:string;



  constructor() {}
  ngOnInit(): void {
  
    
  }
  getControl() {
    return this.form as FormGroup;
  }
 

}
