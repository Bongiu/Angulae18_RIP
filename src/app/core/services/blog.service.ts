import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post} from '../interfaces/posts.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  nome = 'giulia';
  URL = 'http://localhost:3000/posts';

  constructor(private http:HttpClient) {

  }

  stampa() {
    console.log('contenuto del servizio blog', this.nome);
  }

  modale() {
    alert('apertura modale');
  }
// chiamata dichiarata ma non inviata
  getPosts():Observable<Post[]>{
    console.log('log service');
    
    return this.http.get<Post[]>(this.URL);
  }

  // GET (singola)
  // POST 
  // PUT
  // DELETE
}
