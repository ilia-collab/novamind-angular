import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected description = "AI-powered productivity for modern teams."
  protected currentYear = 2026 

  protected productLinks = [
    "Features",
    "Integrations",
    "Pricing",
    "Changelog"
  ]

  protected companyLinks = [
    "About",
    "Blog",
    "Careers",
    "Press"
  ]

  protected resourcesLinks = [
    "Documentation",
    "API Reference",
    "Community",
    "Support"
  ]

  protected bottomLinks = [
    "Privacy",
    "Terms",
    "Cookies"
  ]

}
