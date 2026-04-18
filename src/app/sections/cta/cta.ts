import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from('.cta-container', {
      scrollTrigger: {
        trigger: '.cta-parent',
        start: 'top 65%'
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power3.out'
    })
    gsap.from('.label', {
      scrollTrigger: {
        trigger: '.cta-parent',
        start: 'top 55%'
      },
      opacity: 0,
      y: 20,
      duration: 1.4,
      ease: 'power3.out'
    })
  }

  title = "Ready to unlock your"
  titleColoring = "team's potential?"
  desc = "Join 50,000+ teams already using NovaMind to ship faster, collaborate smarter, and stay ahead."
  buttonLabel = "Get Started — It's Free"
}
 