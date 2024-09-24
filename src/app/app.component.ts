import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../library/card/card.component';
import { ReactiveFormComponent } from '../library/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../library/template-form/template-form.component';
import { RipassoComponentiComponent } from './ripasso-componenti/ripasso-componenti.component';
import { HttpComponent } from '../library/http/http.component';
import { BlogService } from './core/services/blog.service';
import { Post, PostsI } from './core/interfaces/posts.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule,ReactiveFormComponent, TemplateFormComponent, RipassoComponentiComponent, HttpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEMO_angular18';
  titoloPadre = signal<string>("Signal titolo")
  nuovoTitolo = 'Nuovo output'
  posts: Post[]= [];
  // blog = inject(BlogService) -> altro metodo per iniettare servizi senza usare il costruttore


  constructor(private blogService:BlogService) { 
    // const blog = new BlogService()
    blogService.stampa()
  }

  getOutput(e:boolean){
    console.log(e);
    
  }

  provaOutput(g:string){
    console.log(g)
  }

  provaFormOutput(d:any){
    console.log('dati in output del form',d);
  }  

  nuoviDatiForm(b:{}){
    console.log('nuovi dati del form', b)
  }

  aperturaModale(){
    this.blogService.modale();
  }

  getPosts(){

    this.blogService.getPosts().subscribe((res)=>{
      if(res){
        this.posts=res as Post[];
        console.log('posts assegnata',this.posts);
        
      }
      console.log('get posts componente padre',res);
      
    });
  }
}



