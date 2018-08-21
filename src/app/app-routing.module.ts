import { KidComponent } from './content/kid/kid.component';
import { MenComponent } from './content/men/men.component';
import { WomenComponent } from './content/women/women.component';
import { HomeComponent } from './content/home/home.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
 
 
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'kid', component: KidComponent },
  { path: 'AddItem', component: AddItemComponent },
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
