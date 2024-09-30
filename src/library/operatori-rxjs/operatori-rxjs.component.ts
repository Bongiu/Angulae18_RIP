import { Component, inject } from '@angular/core';
import { delay, filter, from, map, Observable, of, switchMap, tap } from 'rxjs';
import { BlogService } from '../../app/core/services/blog.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../app/core/interfaces/posts.interface';

@Component({
  selector: 'app-operatori-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operatori-rxjs.component.html',
  styleUrl: './operatori-rxjs.component.css',
})
export class OperatoriRxjsComponent {
  //  OPERATORI più utilizzati --> funzionano a cascata
  // of / from --> trasforma il contenuto in un observable
  // delay --> ritardo nell'esecuzione espresso sempre in millisecondi
  operatoreOF: Observable<string> = of('valore di of');
  operatoreFilter: Observable<number> = from([22, 44, 66, 88]);
  operatoreSwitchMap1: Observable<{ id: number; name: string }> = of({
    id: 1,
    name: 'quokka',
  });
  operatoreSwitchMap2: Observable<{ id: number; name: string }> = of({
    id: 2,
    name: 'koala',
  });
  postService = inject(BlogService); // SEVIZIO IMPORTATO inserito in una variabile
  post!: Post;


  ngOnInit() {
    this.methodOF();
    this.methodFilter();
    this.methodSwitchMap();

    // forkJoin
    this.methodForkJoin();
  }

  methodOF() {
    this.operatoreOF
      .pipe(
        delay(2000),
        tap((tapRes) => {
          console.log('stampa di tap ->', tapRes);
        }),
        map((mapRes) => {
          // return {mapResKey : mapRes, chiaveCustom : 'valore custom aggiunto dinamicamente'}
          // return [mapRes,'contenuto aggiunto dinamicamente']
          return 'mario';
        }),
        tap((tapsecRes) => {
          console.log('stampa secondo tap ->', tapsecRes);
        })
      )
      .subscribe((res) => {
        if (res) {
          console.log('Response subribe finale', res);
        }
      });
  }

  // tap --> inserire il log per capire le manipolazioni - lettura o assegnazioni

  // zip
  // switchmap
  // concatMap --> aspetta un observable alla volta (sequenzialmente)
  // mergeMap
  // map --> manipola l'observable in quello che viene specificato
  // filter

  methodFilter() {
    this.operatoreFilter
      .pipe(
        filter((resFilter) => {
          return resFilter > 33;
        })
      )
      .subscribe((res) => {
        console.log('operatore Filter', res);
      });
  }

  // chiamata 1 contiene id per effettuare chiamata 2
  methodSwitchMap() {
    this.postService
      .getChiaveAccessoSwitchMap()
      .pipe(
        switchMap((resChiaveAccesso) => {
          return this.postService.getPost(resChiaveAccesso.chiaveID);
        })
      )
      .subscribe((res) => {
        if (res) {
          console.log('chiamata method SwitchMAP', res);
          this.post = res;
        }
      });
  }

  


  userForkJoin: any[] = [];
  postForkJoin: any[] = [];

  // forkJoin --> operatore che emette un valore quando tutti gli observable, forniti coem argomento, sono completati
  // -> estituisce un array contenente i risultati delle chiamate, nell'ordine in cui sono state effettuate.
  // -> aspetta tutte le richieste
  // -> se una delle richieste fallisce, forkJoin non emette alcun valore e segnala l'errore.

  methodForkJoin() {
    // alert('forkJoin');
  
    this.postService.getAllForkJoin().subscribe((res) => {
      if (res) {
        this.userForkJoin = res;
        
        console.log('FORKJOIN', this.userForkJoin);
      }
    });
  }


}
