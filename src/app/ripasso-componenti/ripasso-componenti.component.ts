import { Component, output } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ripasso-componenti',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ripasso-componenti.component.html',
  styleUrl: './ripasso-componenti.component.css',
})
export class RipassoComponentiComponent {
  // creazione form
  nuovoForm!: FormGroup;

  ngOnInit() {
    this.formInit();
  }

  // inizializzazione form
  formInit() {
    this.nuovoForm = new FormGroup({
      username: new FormControl<string | null>(null, [Validators.required]),
      data: new FormControl<Date>(new Date()),
      mail: new FormControl<string | null>(null, Validators.email),
      genere: new FormControl<string>('', Validators.required),
    });
  }

  // stampa dati form
  get username() {
    return this.nuovoForm.get('username');
  }

  get data() {
    return this.nuovoForm.get('data');
  }

  get mail() {
    return this.nuovoForm.get('mail');
  }

  get genere() {
    return this.nuovoForm.get('genere');
  }

  // invio dati form
  inviaDati() {
    // console.log('questo è il log',this.nuovoForm.value);
    if (this.nuovoForm.valid && this.nuovoForm.value) {
      this.datiForm.emit(this.nuovoForm.value);
      // this.nuovoForm.reset();
      // this.nuovoForm.disable();
      this.username?.setValue('Giulia');
      this.username?.enable();
    }
  }

  resetForm() {
    this.nuovoForm.reset();
    this.username?.removeValidators(Validators.required);
    this.nuovoForm.updateValueAndValidity();
  }

  datiForm = output<{}>();

  // output
  // componente figlio inviaDati
  // - evento custom -> Output
  // - funzione Trigger -> invio effettivo Output
  // componente padre riceve
  // definizione evento custom sul componente figlio
  // funzione ricezione output/evento (no click) -> connessa all'evento
  
}
