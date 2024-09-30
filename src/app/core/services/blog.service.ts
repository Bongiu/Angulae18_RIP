import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Post} from '../interfaces/posts.interface';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  nome = 'giulia';
  URL = 'http://localhost:3000/posts';
  baseURL = 'http://localhost:3000'
  editPostData = new BehaviorSubject<Post | null>(null); // comunicazione di dati a livello globale
  editPostDataSignal = signal<Post | null>(null); 
  

  constructor(private http:HttpClient) {
  }

  stampa() {
    console.log('contenuto del servizio blog', this.nome);
  }

  modale() {
    alert('apertura modale');
  }

  //get all ->prende tutto
  // questo ritorna l'observable
  getPosts():Observable<Post[]>{
    console.log('log service');
    return this.http.get<Post[]>(this.URL);
  }
  
  // get chiave accesso switchMAP

  getChiaveAccessoSwitchMap(){
    return this.http.get<{chiaveID : number}>(`${this.baseURL}/chiaveAccesso`)
    // return this.http.get<{chiaveID : number}>('http://localhost:3000/chiaveAccesso')
  }


  // chiamata singola 
  
  // GET (singola)
  getPost(id:string | number){
    //localhost:4200/post/id
    return this.http.get<Post>(`${this.URL}/${id}`);
  }

  // POST 
  createPost(body:Post){
    return this.http.post<Post>(this.URL, body);
  }

  // PUT - edit
  editPost(id:string, body:Post){
    return this.http.put<Post>(`${this.URL}/${id}`, body);
  }

  // DELETE
  deletePost(id:string){
    return this.http.delete<Post>(`${this.URL}/${id}`);
  }

  // FORKJOIN

  getForkJoinPost(){
    return this.http.get(this.baseURL+'/chiaveForkJoinPost');
  }

  getForkJoinUser(){
    return this.http.get(this.baseURL+'/chiaveForkJoinUser');
  }

  getAllForkJoin(){
    return forkJoin([
      this.getForkJoinUser(),
      this.getForkJoinPost()
    ])
  }
}
