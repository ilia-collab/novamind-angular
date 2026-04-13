import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  public = "Now in Public Beta — Try it free"

  description = "NovaMind transforms how teams work — smart automation, predictive insights, and seamless collaboration, all in one workspace."

 primaryButtonText = "Start Free" 
 secondaryButtonText = "Watch Demo" 

}
