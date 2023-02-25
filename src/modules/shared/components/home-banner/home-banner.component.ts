import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeBannerComponent implements OnInit {

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints:{
      640:{
        slidesPerView: 1, 
      }
    }
  };

  constructor() {}

  ngOnInit(): void {}

}
