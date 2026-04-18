import { Component, signal, AfterViewInit } from '@angular/core';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { Showcase } from './sections/showcase/showcase';
import { Cta } from './sections/cta/cta';
import { Stats } from './sections/stats/stats';
import { Testimonials } from './sections/testimonials/testimonials';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Features,
    Showcase,
    Cta,
    Stats,
    Testimonials,
    Footer,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App  {

  protected readonly title = signal('novamind');


}