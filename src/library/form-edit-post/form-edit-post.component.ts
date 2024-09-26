import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../app/core/services/blog.service';
import { Post } from '../../app/core/interfaces/posts.interface';

@Component({
  selector: 'app-form-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-post.component.html',
  styleUrl: './form-edit-post.component.css'
})
export class FormEditPostComponent {
  form! : FormGroup;
  editDatiForm = input<Post | null | undefined>();

  constructor(private blogService:BlogService) { 
    // const blog = new BlogService()
    // provare ad utilizzare gli effect -> funzioni dimamiche utilizzate con i signal, al cambiamento 
   
  }

  ngOnInit(){
    this.initEditForm();
   
  }
// creazione form
  initEditForm(){
    this.form = new FormGroup({
      title:new FormControl<null | string | undefined>( this.editDatiForm()?.title ? this.editDatiForm()?.title : null, [Validators.required]),
      views: new FormControl<null | number>( null, [Validators.required])
    })
  }
// prendi dati dal form

get title(){
  return this.form.get('title');
}

get views(){
  return this.form.get('views');
}
//stampa dati


datiALpadre = output<{title:string, views:number}>();

invioDati(){
  if(this.form.valid){
    this.datiALpadre.emit(this.form.value)
  }
}
// invio dati da figlio a padre -> output
// stampa dati in output
// ricezione dati da padre a figlio
// aggiunto nuovo post


}
