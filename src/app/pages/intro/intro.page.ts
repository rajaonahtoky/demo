import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  public appSildes = [
    {
      image: 'assets/images/pic.jpg',
      title: 'Le shop mobile',
      description: 'Bienvenu'
    },
    {
      image: 'assets/images/slide-2.jpg',
      title: 'Service d\'entretien à domicile',
      description: 'Maitrisez la qualité de l’eau de votre piscine. Planifiez les interventions.'
    },
    {
      image: 'assets/images/slide-3.jpg',
      title: 'Interventions et SAV',
      description: 'Une panne ou un doute sur le fonctionnement d\’un équipement ?'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
