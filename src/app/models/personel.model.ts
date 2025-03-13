export class Personel {
    static idCounter: number = 0;
    name: string;
    surname: string ;
    tc: string ;
    id: number = Personel.idCounter++;
    description: string ;
    telno: number ;
    adres: string ;
    email: string ;



    constructor(name: string, surname: string, tc: string,  description: string = "", adres:string,  email:string, telno:number, id: number = 0) {
        this.name = name;
        this.surname = surname;
        this.tc = tc;
        this.id=id;
        this.id = Personel.idCounter++;
        this.description = description;
        this.telno = telno;
        this.adres = adres;
        this.email = email;
    }
}
