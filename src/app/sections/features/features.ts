import { Component, input } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  protected title = "FEATURES"

  protected desc = "Everything you need to"
  protected work = "work smarter"

  protected boxTitles = [
    "Smart Workflow Automation",
    "AI Task Prioritization",
    "Real-Time Collaboration",
    "Predictive Insights"
  ]
  protected boxDescs = [
    "Automate repetitive tasks with AI that learns your patterns and optimizes your workflows in real-time.",
    "Let NovaMind analyze deadlines, dependencies, and team capacity to surface what matters most.",
    "Work together seamlessly with live cursors, shared context, and instant synchronization across your team.",
    "Get ahead of blockers with predictive analytics that forecast productivity trends and risks."
  ]
}