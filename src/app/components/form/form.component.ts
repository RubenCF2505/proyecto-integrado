import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as CCAA from 'ccaa.json';
import * as CITIES from 'poblaciones.json';
import * as DISTRICTS from 'provincias.json';
import { DataList } from 'src/app/data-list';
import { Validadores } from 'src/app/validadores';
import { TEACHERS } from '../teachers/mock-teachers';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  Id = false
  teacherId = -1
  teachers = TEACHERS
  community = (JSON.parse(JSON.stringify(CCAA))).default
  DISTRICTS = JSON.parse(JSON.stringify(DISTRICTS)).default
  CITIES = JSON.parse(JSON.stringify(CITIES)).default
  provincias: DataList[] = []
  ciudades: DataList[] = []

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  form = this.formBuilder.group({

    firstName: ['', [Validators.required, Validadores.validateNames,]],
    surName: ['', [Validators.required, Validadores.validateNames,]],
    document: ['', [Validators.required]],
    nif: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    phone: ['', [Validators.required]],

    email: ['', [Validators.required, Validators.email]],
    place: this.formBuilder.group({
      AC: ['', [Validators.required]],
      district: [{ value: "", disabled: true }, [Validators.required]],
      city: [{ value: "", disabled: true }, [Validators.required]]
    }),
    address: this.formBuilder.group({

      st: ['', [Validators.required]],
      number: ['', [Validators.required, Validadores.isNumber(),]],
      PC: ['', [Validators.required, Validadores.checkNumberLength(), Validadores.isNumber(),]],
      floor: [''],
      letter: ['']
    }),
    teacher: ['']

  })
  addressFormGroup = this.form.get('address') as FormGroup;
  placeholder = Object.keys(this.form.value)
  ngOnInit(): void {
    this.setDistrict()


    this.setCity()

    this.getTeacher()
  }
  setDistrict() {
    this.form.get('place.AC')!.valueChanges.subscribe(x => {
      this.form.get('place.district')?.enable()
      this.provincias = []
      this.ciudades = []
      this.showProvinces(x!)
    })
  }
  setCity() {
    this.form.get('place.district')!.valueChanges.subscribe(x => {
      x != "" ? this.form.get('place.city')?.enable() :
        this.ciudades = []
      this.showCities(x!)

    })
  }
  showProvinces(id: string) {
    this.DISTRICTS.forEach((element: DataList) => {
      if (element.parent_code == id) {
        this.provincias.push(element)
      }
    });
  }
  showCities(id: string) {
    this.CITIES.forEach((element: DataList) => {
      if (element.parent_code == id) {

        this.ciudades.push(element)
      }
    });
  }
  getTeacher(): void {
    let id: any = this.route.snapshot.paramMap.get('id')
    id = id?.replace('teacherId=', '')

    if (id != undefined) {
      this.Id = true;
      this.teacherId = id
      this.form.get('teacher')?.setValue(this.teachers[this.teacherId-1].name)
  
    } 
  

  }
  onSubmit() {
    console.log(this.form.value);

  }
  setId() {
    this.Id = false
  }


}

