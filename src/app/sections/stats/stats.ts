import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

type stats = {
  title: string
  desc: string
}

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.from('.stats-parent', {
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 90%'
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    })
    gsap.from('.stats-box', {
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 70%'
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out'
    })
  }

  protected box: stats[] = [
    {
      title: "50K+",
      desc: "Teams worldwide"
    },
    {
      title: "99.9%",
      desc: "Uptime SLA"
    },
        {
      title: "3.2x",
      desc: "Productivity boost"
    },
        {
      title: "120+",
      desc: "Integrations"
    },
  ]
}
 