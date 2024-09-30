import { Routes } from '@angular/router';
import { HomeComponent } from '../library/home/home.component';
import { ReactiveFormComponent } from '../library/reactive-form/reactive-form.component';

export const routes: Routes = [
    // collegamento diretto al componente - si usa solo per la home
    { path: '', component: HomeComponent },
    // file di configurazione
    { path: 'post', loadChildren: ()=>import('../library/post-router/post.route').then(m=>m.ROUTES) },
    { path: 'reactiveForm', loadChildren: ()=>import('../library/reactive-form/reactiveForm.route').then(m=>m.ROUTES)},
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
];
