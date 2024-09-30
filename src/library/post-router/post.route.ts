import { Route } from "@angular/router";
import { PostRouterComponent } from "./post-router.component";
import { DettaglioPostComponent } from "./dettaglio-post/dettaglio-post.component";

export const ROUTES: Route[] = [
    {
         // localhost/post/ --> baseURL
    path: '',
    component: PostRouterComponent,
    // resolve: {
    //   items: priceCatalogsResolver,
    //   properties: priceCatalogPropertiesResolver
    // }
    },
    {
        // loclhost/post/dettaglio
    path: 'dettaglio',
    component: DettaglioPostComponent,
    },
    // {
        // localhost/post/figlio
    // path: 'figlio:id',
    // component: PostRouterComponent,
    // },
    // {
        // localhost/post/giulia
    // path: 'giulia/mario',
    // component: PostRouterComponent,
    // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]