import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';






@Component({
  selector: 'app-rojo',
  templateUrl: './rojo.component.html',
})



export class RojoComponent implements OnInit {
  
  cards: charData[] = [];
  
  constructor(private _cardsService: CardsDataService) {
  
  }

  ngOnInit(): void {
    this.cards = this._cardsService.getCards();
  }

}
