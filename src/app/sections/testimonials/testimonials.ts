import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from('.test-container', {
      scrollTrigger: {
        trigger: '.test-parent',
        start: 'top 80%'
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    })
    gsap.from('.test-boxes', {
      scrollTrigger: {
        trigger: '.test-parent',
        start: 'top 55%'
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out'
    })
  }

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
