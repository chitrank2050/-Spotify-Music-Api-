import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SpotifyService {
/**
 * Property Variables
 */

  private _searchUrl:string;
  private _artistUrl:string;
  private _albumsUrl:string;
  private _albumUrl:string;

/**
 * Token Variables
 */
  private _clientId = '6dc4a3c09a1f4035a93cd8fb4b9ffd98';
  private _clientSecret ='48dec45432ce4351b7af8a2f1a140598';
  private _OAuth='Bearer BQCdQXBr3_qgkUpM5e3uNkFPh1WSqLfJqgLMiOMm0psLaTWRNex1MAnCxyojWaatxhPS3bj4_XOh3g7vP3Zgu83razzm0RXR058JTgmlZIYrh7cIAt51FuJEpOCJJEUZVQylvZHlENTB';

  private headers=new Headers({
    'Content-Type':'application/json',
    'Accept': 'application/json',
    'Authorization' : this._OAuth,
  });

  private options = new RequestOptions({ headers: this.headers });

  constructor(private _http:Http) 
  { 
    console.log('Service Ready');
  }

  searchMusic(str:string,type='artist')
  {  
    this._searchUrl='https://api.spotify.com/v1/search?query='+str+'&type='+type+'&market=US&offset=0&limit=10';
    return this._http.get(this._searchUrl,this.options)
            .map(res=>res.json())
            .catch(this.handleError);
  }

  getArtist(id:string)
  {  
    this._artistUrl='https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this._artistUrl,this.options)
            .map(res=>res.json())
            .catch(this.handleError)
  }

  getAlbums(artistId:string)
  {  
    this._albumsUrl='https://api.spotify.com/v1/artists/'+artistId +'/albums';
    return this._http.get(this._albumsUrl,this.options)
            .map(res=>res.json())
            .catch(this.handleError)
  }

  getAnAlbum(albumId:string)
  {
    this._albumsUrl='https://api.spotify.com/v1/albums/'+albumId;
    return this._http.get(this._albumsUrl,this.options)
            .map(res=>res.json())
            .catch(this.handleError)
  }
  private handleError (error: Response | any) 
  {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return Observable.throw(errMsg);
  }

}
