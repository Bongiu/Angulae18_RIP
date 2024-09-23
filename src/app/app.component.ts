import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../library/card/card.component';
import { ReactiveFormComponent, ReactiveFormInterface } from '../library/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../library/template-form/template-form.component';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ReactiveFormComponent, TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEMO_angular18';
  titoloPadre = signal<string>("Signal titolo")
  nuovoTitolo = 'Nuovo output'

  getOutput(e:boolean){
    console.log(e);
    
  }

  provaOutput(g:string){
    console.log(g)
  }

  provaFormOutput(d:any){
    console.log('dati in output del form',d);
  }  
}



