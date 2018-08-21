import { AddItemComponent } from "./add-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireStorageModule } from "../../../node_modules/angularfire2/storage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  declarations: [AddItemComponent],
  exports: [AddItemComponent]
})
export class AddItemModule {
}
