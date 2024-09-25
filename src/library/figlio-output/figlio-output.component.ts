import { Component, output } from '@angular/core';

@Component({
  selector: 'app-figlio-output',
  standalone: true,
  imports: [],
  templateUrl: './figlio-output.component.html',
  styleUrl: './figlio-output.component.css'
})
export class FiglioOutputComponent {
  // output
  // componente figlio inviaDati
  // - evento custom -> Output
  // - funzione Trigger -> invio effettivo Output
  // componente padre riceve
  // definizione evento custom sul componente figlio
  // funzione ricezione output/evento (no click) -> connessa all'evento

  figlioOutput = output<string>();

  invioOutput(figlioOut:string){
    this.figlioOutput.emit(figlioOut);
  }

}
