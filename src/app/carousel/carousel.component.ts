import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true // Marca o componente como standalone
})
export class CarouselComponent implements OnInit {
  currentSlide: number = 0;
  totalSlides: number = 2; // Atualize conforme o número total de slides
  slideInterval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6500); // Muda de slide a cada 10 segundos
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    const container = document.querySelector('.carousel-container') as HTMLElement;
    container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}
