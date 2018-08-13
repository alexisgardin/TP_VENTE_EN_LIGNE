import { CarouselModule } from 'ngx-bootstrap';
import { SlidePromComponent } from './slide-prom/slide-prom.component';
import { SliderComponent } from './slider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, CarouselModule.forRoot()
  ],
  declarations: [SliderComponent, SlidePromComponent],
  exports: [SliderComponent]
})
export class SliderModule { }
