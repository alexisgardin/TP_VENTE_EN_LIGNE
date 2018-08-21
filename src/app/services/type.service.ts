import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { TypeModel } from "../model/TypeModel";
import { map, filter, catchError, mergeMap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TypeService {
  private typeCollection: AngularFirestoreCollection<TypeModel>;
  types: Observable<TypeModel[]>;
  constructor(private afs: AngularFirestore) {
    this.typeCollection = afs.collection<TypeModel>("types");
    this.types = this.typeCollection.snapshotChanges().pipe(
      map(element => {
        return element.map(value => {
          const data = value.payload.doc.data() as TypeModel;
          const id = value.payload.doc.id;
          console.log(id, data);
          return { id, ...data };
        });
      })
    );
  }
}
