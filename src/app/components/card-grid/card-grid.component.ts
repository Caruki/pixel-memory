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
      title: 'paw',
      visible: false,
      img: '../../../assets/imgs/skill_icons1.png'
    },
    {
      title: 'hammer',
      visible: false,
      img: '../../../assets/imgs/skill_icons2.png'
    },
    {
      title: 'eye',
      visible: false,
      img: '../../../assets/imgs/skill_icons6.png'
    },
    {
      title: 'poison-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons8.png'
    },
    {
      title: 'poison-arrow',
      visible: false,
      img: '../../../assets/imgs/skill_icons9.png'
    },
    {
      title: 'red-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons14.png'
    },
    {
      title: 'rage',
      visible: false,
      img: '../../../assets/imgs/skill_icons15.png'
    },
    {
      title: 'red-heart',
      visible: false,
      img: '../../../assets/imgs/skill_icons16.png'
    },
    {
      title: 'bleeding',
      visible: false,
      img: '../../../assets/imgs/skill_icons17.png'
    },
    {
      title: 'ice',
      visible: false,
      img: '../../../assets/imgs/skill_icons19.png'
    },
    {
      title: 'sneak',
      visible: false,
      img: '../../../assets/imgs/skill_icons20.png'
    },
    {
      title: 'shield',
      visible: false,
      img: '../../../assets/imgs/skill_icons22.png'
    },
    {
      title: 'thunder',
      visible: false,
      img: '../../../assets/imgs/skill_icons23.png'
    },

    {
      title: 'wolf',
      visible: false,
      img: '../../../assets/imgs/skill_icons25.png'
    },
    {
      title: 'web',
      visible: false,
      img: '../../../assets/imgs/skill_icons27.png'
    },
    {
      title: 'speed',
      visible: false,
      img: '../../../assets/imgs/skill_icons30.png'
    },
    {
      title: 'paw',
      visible: false,
      img: '../../../assets/imgs/skill_icons1.png'
    },
    {
      title: 'hammer',
      visible: false,
      img: '../../../assets/imgs/skill_icons2.png'
    },
    {
      title: 'eye',
      visible: false,
      img: '../../../assets/imgs/skill_icons6.png'
    },
    {
      title: 'poison-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons8.png'
    },
    {
      title: 'poison-arrow',
      visible: false,
      img: '../../../assets/imgs/skill_icons9.png'
    },
    {
      title: 'red-blade',
      visible: false,
      img: '../../../assets/imgs/skill_icons14.png'
    },
    {
      title: 'rage',
      visible: false,
      img: '../../../assets/imgs/skill_icons15.png'
    },
    {
      title: 'red-heart',
      visible: false,
      img: '../../../assets/imgs/skill_icons16.png'
    },
    {
      title: 'bleeding',
      visible: false,
      img: '../../../assets/imgs/skill_icons17.png'
    },
    {
      title: 'ice',
      visible: false,
      img: '../../../assets/imgs/skill_icons19.png'
    },
    {
      title: 'sneak',
      visible: false,
      img: '../../../assets/imgs/skill_icons20.png'
    },
    {
      title: 'shield',
      visible: false,
      img: '../../../assets/imgs/skill_icons22.png'
    },
    {
      title: 'thunder',
      visible: false,
      img: '../../../assets/imgs/skill_icons23.png'
    },

    {
      title: 'wolf',
      visible: false,
      img: '../../../assets/imgs/skill_icons25.png'
    },
    {
      title: 'web',
      visible: false,
      img: '../../../assets/imgs/skill_icons27.png'
    },
    {
      title: 'speed',
      visible: false,
      img: '../../../assets/imgs/skill_icons30.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
