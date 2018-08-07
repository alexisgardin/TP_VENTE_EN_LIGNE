import { ItemListModule } from './item-list/item-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SlidePromComponent } from './slider/slide-prom/slide-prom.component';

@NgModule({
  imports: [
    CommonModule, CarouselModule,ItemListModule
  ],
  declarations: [ContentComponent, SliderComponent, SlidePromComponent],
  exports : [ContentComponent,SliderComponent]
})
export class ContentModule { }
