import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  constructor() {
    setInterval(() => {
      this.next();
    }, 5000);
  }

  // Initialize the active slide index
  activeSlideIndex: number = 0;

  // Array to hold the slide data (you can define your own data structure)
  slides = [
    { title: 'Slide 1', image: '../../assets/home-img-1.png' },
    { title: 'Slide 2', image: '../../assets/home-img-2.png' },
    { title: 'Slide 3', image: '../../assets/home-img-3.png' },
  ];

  // Function to go to the next slide
  next() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  // Function to go to the previous slide
  prev() {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
