import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BannerHeaderComponent} from './components/banner-header/banner-header.component';
import {HomeComponent} from './components/home-blog/home-blog.component';
import {PhotoGalleryComponent} from './components/photo-gallery/photo-gallery.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,BannerHeaderComponent,PhotoGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
}
