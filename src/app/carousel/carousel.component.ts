import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // an array of slides
  slides = [
    {
      contentText: 'Only the fresh',
      discount: 'upto 50% off',
      secondaryText: 'Save more with us',
      imagePath: '../../assets/home-img-1.png',
    },
    {
      contentText: 'Handpicked from farm',
      discount: 'upto 25% off',
      secondaryText: 'Eat the best',
      imagePath: '../../assets/home-img-2.png',
    },
    {
      contentText: '2 Stage quality checks',
      discount: 'upto 30% off',
      secondaryText: 'Feed your family the best',
      imagePath: '../../assets/home-img-3.png',
    },
  ];

  currentSlideIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    // Start automatic slide toggling
    this.intervalId = setInterval(() => {
      this.toggleSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  toggleSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Move to the next slide
  next() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Move to the previous slide
  prev() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
