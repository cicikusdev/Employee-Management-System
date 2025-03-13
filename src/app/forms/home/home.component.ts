import { Component, OnInit } from '@angular/core';
import { Personel } from '../../models/personel.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  personelList: Personel[] = [];
  showForm: boolean = false;
  showDialog: boolean = false;
  showEditDialog: boolean = false;
  showDeleteDialog: boolean = false;
  newPersonel: Personel = new Personel("", "", "","","","",0);
  selectedPersonel: any;
  editPersonel: any;




    ngOnInit(): void {

    }

    personelEkle() {
      if (this.newPersonel.name && this.newPersonel.surname && this.newPersonel.tc) {
        this.personelList.push(
          new Personel(
            this.newPersonel.name,
            this.newPersonel.surname,
            this.newPersonel.tc,
            this.newPersonel.description,
            this.newPersonel.adres,
            this.newPersonel.email,
            this.newPersonel.telno
          )
        );
        this.newPersonel = new Personel("", "", "", "", "", "", 0);
        this.showDialog = true;
      }
    }

    personelSil(personel: Personel):void{
      this.showDeleteDialog = true;
      this.personelList = this.personelList.filter(f => f.id !== personel.id);
    }


    personelDuzenle(personel: Personel | null){
      if (personel) {
        this.editPersonel = { ...personel }; // Seçilen personelin bilgilerini kopyala
        this.showEditDialog = true; // Dialog kutusunu aç
      }
    }


  personelGuncelle(): void {
    const index = this.personelList.findIndex(p => p.id === this.editPersonel.id);
    if (index !== -1) {
      this.personelList[index] = this.editPersonel;
    }
    this.showEditDialog = false; // Diyaloğu kapat
  }

  selectPersonel(personel: Personel): void {
    this.selectedPersonel = this.selectedPersonel === personel ? null : personel;
  }


  toggleForm(): void {
    this.showForm = !this.showForm;
  }
  toggleDescription(personel: any) {

    if (this.selectedPersonel?.id === personel.id) {
      this.selectedPersonel = null;
    } else {
      this.selectedPersonel = personel;
    }
  }

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
