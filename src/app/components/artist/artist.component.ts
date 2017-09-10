import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../../Artist';
import { Album } from '../../../../Album';
  
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  albums:Album[];

  constructor(private _spotifyService:SpotifyService,
              private _route:ActivatedRoute) {

   }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id)=>{
          this._spotifyService.getArtist(id)
              .subscribe(artist=>{
                this.artist=artist;
                console.log('>>',this.artist);
              })

          this._spotifyService.getAlbum(id)
              .subscribe (album=>{
                this.albums=album.items;
                console.log('>>',this.albums);
          })
        })
  }

}
