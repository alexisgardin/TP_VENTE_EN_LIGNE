import { SideBarComponent } from "./side-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { SidebarItemGroupComponent } from "./sidebar-item-group/sidebar-item-group.component";
import { SidebarSubItemComponent } from "./sidebar-item-group/sidebar-sub-item/sidebar-sub-item.component";
import { RouterModule } from "@angular/router";
import { SidebarNavComponent } from "./sidebar-nav/sidebar-nav.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SideBarComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    SidebarSubItemComponent,
    SidebarNavComponent
  ],
  exports: [
    SideBarComponent,
    SidebarNavComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    SidebarSubItemComponent
  ]
})
export class SideBarModule {}
