import { Component } from '@angular/core';



@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  title = [
    "50K+",
    "99.9%",
    "3.2x",
    "120+"
  ]

  desc = [
    "Teams worldwide",
    "Uptime SLA",
    "Productivity boost",
    "Integrations"
  ]

}
 