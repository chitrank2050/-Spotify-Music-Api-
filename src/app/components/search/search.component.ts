import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service'
import {Artist} from '../../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[SpotifyService]
})

export class SearchComponent implements OnInit {
  private _searchStr:string;
  private searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) { }
  searchMusic(){
    this._spotifyService.searchMusic(this._searchStr)
        .subscribe( res => {
          this.searchRes = res.artists.items;
        })
    }

  ngOnInit() {
  }

}
