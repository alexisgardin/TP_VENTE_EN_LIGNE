import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from '../model/ItemModel';

const MOCKITEM = [new Item('Robe en viscose à motif',14.99,'./assets/images/Robes/robe1.jpeg',true, 'F', 'robe',['midi']),
new Item('Robe à motif',24.99,'./assets/images/Robes/robe2.jpeg',true, 'F', 'robe',['midi']),
new Item('Robe en viscose à motif',44.99,'./assets/images/Robes/robe3.jpeg',true, 'F', 'robe',['midi']),
new Item('Robe Labyrinthe',44.99,'./assets/images/Robes/robe4.jpeg',true, 'F', 'robe',['courte']),
new Item('Robe en viscose à motif',18.99,'./assets/images/Robes/robe5.jpeg',true, 'F', 'robe',['longue']),
new Item('Robe papier peint de grand mère',89.99,'./assets/images/Robes/robe6.jpeg',true, 'F', 'robe',['longue']),
new Item('Robe à motif',100.99,'./assets/images/Robes/robe7.jpeg',true, 'F', 'robe',['longue']),
new Item('Robe d\'été simple',222.99,'./assets/images/Robes/robe8.jpeg',true, 'F', 'robe',['courte']),
new Item('Robe de princesse jaune',20.99,'./assets/images/Robes/robe9.jpeg',true, 'F', 'robe',['courte']),
new Item('Robe d\'été simple',90.00,'./assets/images/Robes/robe12.jpeg',true, 'F', 'robe',['midi']),
new Item('Robe à la romaine bleu',89,'./assets/images/Robes/robe11.jpeg',true, 'F', 'robe',['longue']),

new Item('T-shirt en coton',4.99,'./assets/images/MancheCourte/manchecourte1.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',14.99,'./assets/images/MancheCourte/manchecourte2.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',34.99,'./assets/images/MancheCourte/manchecourte3.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',49.99,'./assets/images/MancheCourte/manchecourte4.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec motif',20.99,'./assets/images/MancheCourte/manchecourte5.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',22.99,'./assets/images/MancheCourte/manchecourte6.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',33.99,'./assets/images/MancheCourte/manchecourte7.jpeg',true, 'F', 'haut',['t-shirt']),
new Item('T-shirt avec impression',4.99,'./assets/images/MancheCourte/manchecourte8.jpeg',true, 'F', 'haut',['t-shirt']),


new Item('Chemise en jean',39.99,'./assets/images/ChemiseFemme/chemise1.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise style Pyjama',39.99,'./assets/images/ChemiseFemme/chemise2.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en jean',39.99,'./assets/images/ChemiseFemme/chemise4.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en soie',39.99,'./assets/images/ChemiseFemme/chemise5.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en soie',39.99,'./assets/images/ChemiseFemme/chemise6.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en soie',39.99,'./assets/images/ChemiseFemme/chemise7.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en jean',39.99,'./assets/images/ChemiseFemme/chemise8.jpeg',true, 'F', 'haut',['chemise']),
new Item('Chemise en coton',39.99,'./assets/images/ChemiseFemme/chemise9.jpeg',true, 'F', 'haut',['chemise']),


new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur1.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur2.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur3.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur4.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur5.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur6.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur7.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur8.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur9.jpeg',true, 'F', 'haut',['debardeur']),
new Item('Debardeur',19.99,'./assets/images/DebardeurFemme/debardeur10.jpeg',true, 'F', 'haut',['debardeur']),


new Item('Jean',45.99,'./assets/images/JeanFemme/jean1.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean2.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean3.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean4.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean5.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean6.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean7.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean8.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean9.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean10.jpeg',true, 'F', 'pantalon',['jean']),
new Item('Jean',45.99,'./assets/images/JeanFemme/jean11.jpeg',true, 'F', 'pantalon',['jean']),


new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon1.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon2.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon3.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon4.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon5.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon6.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon7.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon8.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon9.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon10.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon11.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon12.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon13.jpeg',true, 'F', 'pantalon',['pantalon']),
new Item('Pantalon simple',45.99,'./assets/images/PantalonFemme/pantalon14.jpeg',true, 'F', 'pantalon',['pantalon']),


new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt1.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt2.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt3.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt4.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt5.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt6.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt7.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt8.jpeg',true, 'M', 'haut',['t-shirt']),
new Item('T-shirt basic',10.99,'./assets/images/TshirtHomme/tshirt9.jpeg',true, 'M', 'haut',['t-shirt']),

new Item('Polo',23.99,'./assets/images/PoloHomme/polo1.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo2.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo3.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo4.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo5.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo6.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo7.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo8.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo9.jpeg',true, 'M', 'haut',['polo']),
new Item('Polo',23.99,'./assets/images/PoloHomme/polo10.jpeg',true, 'M', 'haut',['polo']),


new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise1.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise2.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise3.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise4.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise5.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise6.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise7.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise8.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise9.jpeg',true, 'M', 'haut',['chemise']),
new Item('Chemise',23.99,'./assets/images/ChemiseHomme/chemise10.jpeg',true, 'M', 'haut',['chemise']),


new Item('Short',26.99,'./assets/images/ShortHomme/short1.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short2.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short3.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short4.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short5.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short6.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short7.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short8.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short9.jpeg',true, 'M', 'Bas',['short']),
new Item('Short',26.99,'./assets/images/ShortHomme/short10.jpeg',true, 'M', 'Bas',['short']),


new Item('Jean',26.99,'./assets/images/JeanHomme/jean1.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean2.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean3.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean4.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean5.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean6.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean7.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean8.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean9.jpeg',true, 'M', 'Bas',['jean']),
new Item('Jean',26.99,'./assets/images/JeanHomme/jean10.jpeg',true, 'M', 'Bas',['jean']),

]
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Item[];
  constructor(private afs: AngularFirestore) { 
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  getItem():void{
    this.shuffleArray(MOCKITEM)
    this.items = MOCKITEM;
}

getItemGenre(sexe:string){
  this.shuffleArray(MOCKITEM)
  this.items = MOCKITEM.filter(value => value.sexe===sexe&&value.adulte);
}

getItemType(sexe:string, type : string, ...args:String[]):void{
  this.items = MOCKITEM.filter(value => value.sexe===sexe&&value.adulte&&value.type === type&& (!(args.length>0)||value.attribute.some(value => args.includes(value))));
  console.log(this.items);
}

addItem(item: Item) {
  let a = JSON.parse(JSON.stringify(item));
  this.itemsCollection.add(a);
}


}