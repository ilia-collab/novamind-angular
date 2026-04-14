import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  protected title = "Testimonials"
  protected desc = "Loved by"
  protected stars = [1, 2, 3, 4, 5]

  protected testimonials = [
    {
      quote: "“NovaMind completely transformed our sprint planning. The AI suggestions are shockingly accurate — it's like having a senior PM on every project.”",
      initials: "SC",
      name: "Sarah Chen",
      role: "VP of Engineering, Arclight"
    },
    {
      quote: "“NovaMind completely transformed our sprint planning. The AI suggestions are shockingly accurate — it's like having a senior PM on every project.”",
      initials: "MJ",
      name: "Marcus Johnson",
      role: "CTO, Helios Labs"
    },
    {
      quote: "“The predictive insights caught a major bottleneck two weeks before it would've derailed our launch. Incredible product.”",
      initials: "AT",
      name: "Aiko Tanaka",
      role: "Product Lead, Zenith"
    }
 ]
}
