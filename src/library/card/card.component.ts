import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  //INPUT
  titoloFiglio = input.required<string>();

  //OUTPUT
  onNameChange = output<boolean>(); // OutputEmitterRef<string>
  setNewName() {
    this.onNameChange.emit(true);
  }

  mioOutput = output<string>(); //questo è un une evento
  //nuovoNome = 'girolamo'
  nuovoOut(nuovoNome : string){
    this.mioOutput.emit(nuovoNome);
  }
}
