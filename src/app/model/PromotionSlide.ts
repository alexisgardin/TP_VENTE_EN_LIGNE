export class PromotionSlide{
    image:String;
    marques:String[];
    nomPromo:String;
    public constructor(image:String, marques:String[], nomPromo:String) {
        this.image=image;
        this.marques=marques;
        this.nomPromo=nomPromo;
    }
}