import { PromotionSlide } from './../../model/PromotionSlide';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides : PromotionSlide[];
  
  constructor() {
    
   }

  ngOnInit() {
    this.slides = [new PromotionSlide('./assets/images/slider1.jpg',['H&M','Desigual','Louis Vuiton','Zarah'],'Collection Automne Hiver 2018‎'),
    new PromotionSlide('./assets/images/slider2.jpg',['Armani','Jules','Hugo Boss'],'Solde jusqu\'à -40% sur les costard'),
    new PromotionSlide('./assets/images/slider3.jpg',['H&M','Desigual','Louis Vuiton','Zarah'],'Les bébés a l\'honneur')
  ]
}

}
