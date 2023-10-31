import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import * as CCAA from 'ccaa.json';
import * as CITIES from 'poblaciones.json';
import * as DISTRICTS from 'provincias.json';
import { DataList } from 'src/app/data-list';
import { Validadores } from 'src/app/validadores';
import { List } from '../../mock-students';
import { TEACHERS } from '../teachers/mock-teachers';
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
  students = List
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  form = this.formBuilder.group({

    firstName: ['', [Validators.required, Validadores.validateNames,]],
    surName: ['', [Validators.required, Validadores.validateNames,]],
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

  ngOnInit(): void {
    this.setDistrict()


    this.setCity()

    this.getTeacher()
    this.showImage()
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
      this.form.get('teacher')?.setValue(this.teachers[this.teacherId - 1].name)

    }


  }
  onSubmit() {
    let student: any = this.form.value


    this.students.push(student)
    console.log(this.students);

  }
  setId() {
    this.Id = false
  }
  showImage() {
    if(this.Id){
      const img = this.teachers[this.teacherId].img
      document.getElementById('img')!.style.backgroundImage=`url(${img})`
    }
    this.form.get('teacher')?.valueChanges.subscribe((x: any) => {
      const img = this.teachers[x].img
      document.getElementById('img')!.style.backgroundImage=`url(${img})`
    });

  }

}

