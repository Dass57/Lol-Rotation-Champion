import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-card-spell',
  templateUrl: './card-spell.component.html',
  styleUrls: ['./card-spell.component.scss']
})
export class CardSpellComponent implements OnInit {

  @Input() champInfo: Array<any> =[]
  spellsInfos : Array<any>=[]
  constructor() { }

  ngOnInit(): void {
    for (let i in this.champInfo){
      this.spellsInfos = this.champInfo[i].spells
    }
  }

}
