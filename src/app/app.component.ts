import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {H1ComponentComponent} from './h1-component/h1-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,H1ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
}
