import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Usuarios{
  nombre:string;
  edad:number;
  email:string;
}
@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit {
  formGoup!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.formGoup=this.initForm();
  }
  initForm():FormGroup {
    return this.fb.group({
      nombre:[``],
      edad:[``],
      email:[``],
    })
  }
  onSubmit(): void {
    console.log(this.formGoup.value)
  }

}
