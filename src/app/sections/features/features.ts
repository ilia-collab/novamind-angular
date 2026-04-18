import { AfterViewInit, Component, input } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

type icons = "zap" | "brain" | "user" | "tranding"

type box = {
  icon: icons
  title: string
  desc: string
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features implements AfterViewInit {

ngAfterViewInit() {

  gsap.from('.feature-container', {
    scrollTrigger: {
      trigger: '.feature-parent',
      start: 'top 60%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.feature-box', {
    scrollTrigger: {
      trigger: '.feature-box-parent',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
  });

}
  

  protected title = "FEATURES"

  protected desc = "Everything you need to"
  protected work = "work smarter"
  protected box: box[]= [
    {
      icon: "zap",
      title: "Smart Workflow Automation",
      desc: "Automate repetitive tasks with AI that learns your patterns and optimizes your workflows in real-time."
    },
    {
      icon: "brain",
      title: "AI Task Prioritization",
      desc: "Let NovaMind analyze deadlines, dependencies, and team capacity to surface what matters most."
    },
    {
      icon: "user",
      title: "Real-Time Collaboration",
      desc: "Work together seamlessly with live cursors, shared context, and instant synchronization across your team."
    },
    {
      icon: "tranding",
      title: "Predictive Insights",
      desc: "Get ahead of blockers with predictive analytics that forecast productivity trends and risks."
    }
  ]
}