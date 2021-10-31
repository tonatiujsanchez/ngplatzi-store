import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay:{
      delay: 2000,
      disableOnInteraction: false
    },
    navigation: true,
    pagination: {
      clickable: true
    },
    loop: true
  };

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
