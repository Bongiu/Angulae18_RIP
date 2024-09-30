import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-post-router',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './post-router.component.html',
  styleUrl: './post-router.component.css'
})
export class PostRouterComponent {

}
