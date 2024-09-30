import { Route } from "@angular/router";
import { ReactiveFormComponent } from "./reactive-form.component";

export const ROUTES: Route[] = [
    {
         // localhost/post/ --> baseURL
    path: '',
    component: ReactiveFormComponent,
    // resolve: {
    //   items: priceCatalogsResolver,
    //   properties: priceCatalogPropertiesResolver
    // }
    },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]