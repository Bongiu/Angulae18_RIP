import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface ReactiveFormInterface {
  userName: string;
  mail: string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm!: FormGroup;

  outputForm = output<ReactiveFormInterface>();

 

  constructor() {
    console.log('1');
  }

  ngOnInit() {
    console.log('2');
    this.initForm();
    // console.log('campo mail', this.mail);
    // console.log('errore mail', this.mail?.errors);
    // console.log('valore del form',this.reactiveForm);
  }

  initForm() {
    debugger;
    this.reactiveForm = new FormGroup({
      userName: new FormControl('giulia', [Validators.required]),
      mail: new FormControl(null, [
        Validators.minLength(4),
        Validators.required,
      ]),
    });
  }

  sendForm() {
    if (this.reactiveForm.valid && this.reactiveForm.value) {
      this.setOutputForm(this.reactiveForm.value);
    }
  }
// ritorna solo la chiave FormControl.value 
  get username(): FormControl {
    return this.reactiveForm.get('userName')?.value;
  }
// riotrna tutto l'oggetto FormCotrol 'mail'
  get mail() {
    return this.reactiveForm.get('mail');
  }

  setOutputForm(form : ReactiveFormInterface) {
   
    if (this.reactiveForm.valid && this.reactiveForm.value) {
      this.outputForm.emit(form);
    }
  }
}
