import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected NavLinks = [
    {label: 'Features', href:"#features"},
    {label: 'Products', href: "#products"},
    {label: 'Stats', href: "#stats"},
    {label: 'Testimonials', href: "#testimonials"}
  ]

  protected menuOpen = signal(false)

  protected toggleMenu() {
    this.menuOpen.update(value => !value)
  }

  protected closeMenu(){
    this.menuOpen.set(false)
  }

  @HostListener('window:resize')
  onWindowResize(){
    if( window.innerWidth > 995 && this.menuOpen() ){
      this.closeMenu()
    }
  }
}
