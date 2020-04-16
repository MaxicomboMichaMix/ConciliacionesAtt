import { Injectable } from '@angular/core';


export interface charData{
  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  options: any;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})


export class CardsDataService {
  
  private cards: charData [] = [{
    title :'Browser market shares at a specific website, 2014',
    type : 'PieChart',
    data : [
     
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
    ],
    columnNames : ['Browser', 'Percentage'],
    options : { 
    pieHole: 0.7
   },
    width : 400,
    height : 400
  },
  {
    title :'Titulo 2',
    type : 'PieChart',
    data : [
     ['Opera', 6.2],
     ['Others', 0.7] 
    ],
    columnNames : ['Browser', 'Percentage'],
    options : { 
    pieHole: 0.7
   },
    width : 400,
    height : 400
  }
  
]
  constructor() { 

  }

  getCards(){
    return this.cards;
  }
}

// title = 'Browser market shares at a specific website, 2014';
//   type = 'PieChart';
//   data = [
     
//      ['IE', 26.8],
//      ['Chrome', 12.8],
//      ['Safari', 8.5],
//      ['Opera', 6.2],
//      ['Others', 0.7] 
//   ];
//   columnNames = ['Browser', 'Percentage'];
//   options = { 
//     pieHole: 0.7,
   
//   };
//   width = 400;
//   height = 400;