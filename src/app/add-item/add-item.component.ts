import { Component, OnInit } from "@angular/core";
import { TypeService } from "../services/type.service";
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "angularfire2/storage";
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup
} from "../../../node_modules/@angular/forms";
@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  filename: String = "";
  attributes = [];
  inputDisabled = false;
  itemForm = this.fb.group({
    name: ["", Validators.required],
    type: ["", Validators.required],
    attributes: this.fb.array(this.attributes)
  });
  constructor(
    private typeService: TypeService,
    private afStorage: AngularFireStorage,
    private fb: FormBuilder
  ) {}
  createItem(): FormGroup {
    return this.fb.group({
      name: ""
    });
  }
  ngOnInit() {
    this.typeService.types.subscribe(elem => console.log(elem));
  }
  choosePhoto(event) {
    this.filename = event.target.files[0].name;
  }
  toArray(event) {
    const values = event.target.value
      .split(",")
      .map(value => value.replace(/^\s+|\s+$/g, ""))
      .filter((value: String) => value != "");
    this.itemForm.setControl("attributes", this.fb.array(values || []));
  }
  disabled() {
    this.inputDisabled = !this.inputDisabled;
  }
  test() {
    console.log(this.itemForm.value);
  }
  test2(test) {
    console.log(test);
  }
  upload(event) {
    console.log("salut");
    const filename = Math.random()
      .toString(36)
      .substring(2);
    this.ref = this.afStorage.ref(filename);
    this.task = this.ref.put(event.target.files[0]);
  }
}
