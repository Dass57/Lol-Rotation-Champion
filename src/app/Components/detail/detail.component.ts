import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  Math: any
  champInfo: Array<any> =[]

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionsService
  ) {
    this.Math = Math
   }

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'))
     this.championService.getChampionbyName(name)
     this.champInfo = this.championService.tabChampInfoByName
     console.log(this.champInfo);

  }
}
