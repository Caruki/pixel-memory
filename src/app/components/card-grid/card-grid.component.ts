import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  cardList: Card[] = [
    {
      id: 1,
      title: 'paw',
      visible: false,
      img: '../../../assets/imgs/skill_icons1.png'
    },
    {
      id: 2,
      title: 'hammer',
      visible: false,
      img: '../../../assets/imgs/skill_icons2.png'
    },
    {
      id: 3,
      title: 'eye',
      visible: false,
      img: '../../../assets/imgs/skill_icons6.png'
    },
    {
      id: 4,
      title: 'poison-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons8.png'
    },
    {
      id: 5,
      title: 'poison-arrow',
      visible: false,
      img: '../../../assets/imgs/skill_icons9.png'
    },
    {
      id: 6,
      title: 'red-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons14.png'
    },
    {
      id: 7,
      title: 'rage',
      visible: false,
      img: '../../../assets/imgs/skill_icons15.png'
    },
    {
      id: 8,
      title: 'red-heart',
      visible: false,
      img: '../../../assets/imgs/skill_icons16.png'
    },
    {
      id: 9,
      title: 'bleeding',
      visible: false,
      img: '../../../assets/imgs/skill_icons17.png'
    },
    {
      id: 10,
      title: 'ice',
      visible: false,
      img: '../../../assets/imgs/skill_icons19.png'
    },
    {
      id: 11,
      title: 'sneak',
      visible: false,
      img: '../../../assets/imgs/skill_icons20.png'
    },
    {
      id: 12,
      title: 'shield',
      visible: false,
      img: '../../../assets/imgs/skill_icons22.png'
    },
    {
      id: 13,
      title: 'thunder',
      visible: false,
      img: '../../../assets/imgs/skill_icons23.png'
    },

    {
      id: 14,
      title: 'wolf',
      visible: false,
      img: '../../../assets/imgs/skill_icons25.png'
    },
    {
      id: 15,
      title: 'speed',
      visible: false,
      img: '../../../assets/imgs/skill_icons30.png'
    },
    {
      id: 16,
      title: 'paw',
      visible: false,
      img: '../../../assets/imgs/skill_icons1.png'
    },
    {
      id: 17,
      title: 'hammer',
      visible: false,
      img: '../../../assets/imgs/skill_icons2.png'
    },
    {
      id: 18,
      title: 'eye',
      visible: false,
      img: '../../../assets/imgs/skill_icons6.png'
    },
    {
      id: 19,
      title: 'poison-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons8.png'
    },
    {
      id: 20,
      title: 'poison-arrow',
      visible: false,
      img: '../../../assets/imgs/skill_icons9.png'
    },
    {
      id: 21,
      title: 'red-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons14.png'
    },
    {
      id: 22,
      title: 'rage',
      visible: false,
      img: '../../../assets/imgs/skill_icons15.png'
    },
    {
      id: 23,
      title: 'red-heart',
      visible: false,
      img: '../../../assets/imgs/skill_icons16.png'
    },
    {
      id: 24,
      title: 'bleeding',
      visible: false,
      img: '../../../assets/imgs/skill_icons17.png'
    },
    {
      id: 25,
      title: 'ice',
      visible: false,
      img: '../../../assets/imgs/skill_icons19.png'
    },
    {
      id: 26,
      title: 'sneak',
      visible: false,
      img: '../../../assets/imgs/skill_icons20.png'
    },
    {
      id: 27,
      title: 'shield',
      visible: false,
      img: '../../../assets/imgs/skill_icons22.png'
    },
    {
      id: 28,
      title: 'thunder',
      visible: false,
      img: '../../../assets/imgs/skill_icons23.png'
    },
    {
      id: 29,
      title: 'wolf',
      visible: false,
      img: '../../../assets/imgs/skill_icons25.png'
    },
    {
      id: 30,
      title: 'speed',
      visible: false,
      img: '../../../assets/imgs/skill_icons30.png'
    }
  ];

  positionArray: number[];

  constructor() {}

  ngOnInit(): void {
    this.shufflePosition();
  }

  shufflePosition() {
    this.positionArray = this.cardList.map((card) => {
      return card.id;
    });
    this.shuffle(this.positionArray);
  }

  shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
}
