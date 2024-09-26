import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../library/card/card.component';
import { ReactiveFormComponent } from '../library/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../library/template-form/template-form.component';
import { RipassoComponentiComponent } from './ripasso-componenti/ripasso-componenti.component';
import { HttpComponent } from '../library/http/http.component';
import { BlogService } from './core/services/blog.service';
import { Post, PostsI } from './core/interfaces/posts.interface';
import { CommonModule } from '@angular/common';
import { FormEditPostComponent } from "../library/form-edit-post/form-edit-post.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, ReactiveFormComponent, TemplateFormComponent, RipassoComponentiComponent, HttpComponent, FormEditPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEMO_angular18';
  titoloPadre = signal<string>("Signal titolo")
  nuovoTitolo = 'Nuovo output'
  posts: Post[]= [];
  postTOedit = signal<null | Post>(null);
  
  // Per modificare gli elementi HTML -> es <div #nomeAssegnato>
  // contenitoreFor = viewChild<ElementRef>('contenitoreFor');
  // console.log('stampa elemento richiamato HTML',this.contenitoreFor);

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

  ricezioneDatiForm(datoOutput:{title:string, views:number}){
    debugger;
    console.log('dati ricevuti dal form', datoOutput);
    //inseriemnto post inviato dal form
    
    const nuovoPost = {
      id:  String(new Date().getSeconds()),
      title: datoOutput.title,
      views: datoOutput.views
    }
    this.createPost(nuovoPost);
    
  }

  //GET - all
  getPosts(){
    this.blogService.getPosts().subscribe((res)=>{
      if(res){
        this.posts=res as Post[];
        console.log('posts assegnata',this.posts);
        
      }
      console.log('get posts componente padre',res);
      
    });
    
  }
//GET - singolo elemento
  getPost(id:string){
    this.blogService.getPost(id).subscribe((res)=>{
      console.log('risposta singola', res);
      
    })
  }

  padreOutput(f:string){
    console.log('quetso è output padre', f);
    
  }

  //POST
  createPost(body:Post){
    this.blogService.createPost(body)
    .subscribe((res)=>{
      console.log('creazione post', res);

      if(res){
        this.getPosts();
      }
      
    })
  }

  //PUT
  editPost(post:Post){
    const id : string = post.id;
    console.log('stampa oggetto post',post);
    if(post){
    this.postTOedit.set(post);
    }

    // this.blogService.editPost(id, { 
    //   id: '33',
    //   title: 'oggetto modificato',
    //   views: 3} ).subscribe((res)=>{
    //     console.log('edit post', res);
    //     if(res){
    //       this.getPosts();
    //     }
    //   })
  }

  //DELETE
  deletePost(id:string){
    this.blogService.deletePost(id).subscribe((res)=>{
      console.log('delete post', res);
      if(res){
        this.getPosts();
      }
    })
  }

 
}



