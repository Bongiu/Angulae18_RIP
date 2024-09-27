import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../app/core/services/blog.service';
import { Post } from '../../app/core/interfaces/posts.interface';


@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-form-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-post.component.html',
  styleUrl: './form-edit-post.component.css'
})
export class FormEditPostComponent {
  form! : FormGroup;
  editDatiForm = input<Post | null>();

  constructor(private blogService:BlogService) { 
    // const blog = new BlogService()
    // provare ad utilizzare gli effect -> funzioni dimamiche utilizzate con i signal, al cambiamento 
    
    effect(() => {
      console.log('stampa EDIT SIGNAL',this.blogService.editPostDataSignal());
      this.title?.setValue(this.blogService.editPostDataSignal()?.title);
      this.views?.setValue(this.blogService.editPostDataSignal()?.views);
    });
   }

   

  ngOnInit(){
    this.initEditForm();
    console.log('stampa signal EDIT', this.editDatiForm());
    // this.ricezioneDatiFiglio();
     
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
    this.datiALpadre.emit(this.form.value);
  }
}

// ricezioneDatiFiglio(){
//     this.blogService.editPostData.subscribe((res)=>{
//     if(res){
//       console.log('Behavior', res);
//       //riassegnazione campi form da modificare
//       this.title?.setValue(res.title);
//       this.views?.setValue(res.views);

//     }
//   })

// }
// invio dati da figlio a padre -> output
// stampa dati in output
// ricezione dati da padre a figlio
// aggiunto nuovo post
// - - - - 
//insermento dai form
//presa dati form
//stampa dati form



}
