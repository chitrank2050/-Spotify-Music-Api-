import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../../Artist';
import { Album } from '../../../../Album';
  
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId:module.id,
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  id:string;
  album:Album[];
 
  constructor(private _spotifyService:SpotifyService,
              private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id)=>{
          this._spotifyService.getAnAlbum(id)
              .subscribe(artist=>{
                this.album=artist;
                console.log('>>',this.album);
              })
        });
  }

}
