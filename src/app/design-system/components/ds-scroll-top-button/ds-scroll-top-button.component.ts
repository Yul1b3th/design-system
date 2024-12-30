import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ds-scroll-top-button',
  imports: [CommonModule],
  templateUrl: './ds-scroll-top-button.component.html',
  styleUrl: './ds-scroll-top-button.component.scss',
})
export class DsScrollTopButtonComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = scrollTop > 200; // Mostrar botón después de 200px de scroll.
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
