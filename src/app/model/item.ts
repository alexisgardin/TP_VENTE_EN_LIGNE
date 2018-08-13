export class Item {
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
    attribute?: String[]
  ) {
    this.nom = nom;
    this.prix = prix;
    this.image = image;
    this.adulte = adulte;
    this.sexe = sexe;
    this.type = type;
    this.attribute = attribute;
  }
}
