import { SideBarModule } from './side-bar/side-bar.module';
import { AppRoutingModule } from '../app-routing.module';
import { ItemListModule } from './item-list/item-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { SliderModule } from './slider/slider.module';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { RouterModule } from '@angular/router';
import { ClickStopPropagation } from './directive/click-stop-propagation.directive';

@NgModule({
  imports: [
    CommonModule,ItemListModule,SliderModule,AppRoutingModule, SideBarModule, RouterModule
  ],
  declarations: [ContentComponent,  HomeComponent, WomenComponent, MenComponent, KidComponent, ClickStopPropagation],
  exports : [ContentComponent]
})
export class ContentModule { }
