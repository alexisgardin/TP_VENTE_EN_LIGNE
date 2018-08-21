export class Item {
  id: String;
  nom: String;
  prix: number;
  image: string;
  adulte: boolean;
  sexe: String;
  type: String;
  attribute: String[] = [];
  constructor(
    nom: String,
    prix: number,
    image: string,
    adulte: boolean,
    sexe: String,
    type: String,
    attribute?: String[],
    id?: String
  ) {
    this.nom = nom;
    this.prix = prix;
    this.image = image;
    this.adulte = adulte;
    this.sexe = sexe;
    this.type = type;
    this.attribute = attribute;
    this.id = id;
  }
}
