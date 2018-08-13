import { PromotionSlide } from '../../../model/PromotionSlide';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-prom',
  templateUrl: './slide-prom.component.html',
  styleUrls: ['./slide-prom.component.css']
})
export class SlidePromComponent implements OnInit {
  @Input() slide: PromotionSlide;
  constructor() { }

  ngOnInit() {
  }

}
