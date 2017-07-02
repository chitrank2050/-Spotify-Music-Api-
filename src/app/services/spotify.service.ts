import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SpotifyService {

  private _searchUrl:string;
  private _artistUrl:string;
  private _clientId = '6dc4a3c09a1f4035a93cd8fb4b9ffd98';
  private _clientSecret ='48dec45432ce4351b7af8a2f1a140598';
  private _OAuth='Bearer BQByjtIu8VMa3Uf-KgMb6kk1-f8wF2EoDXGb6mEdauGRwl4zef5-rxC7W2asJHdtqYsudwdXfFxAJQBaXJC2eStnexB9el6zAcAX_uAut_r6ekq9zlhNmd10MVqch9rCiJ5wL5rzxffO3B7iGaOvpDU5tAR-WgJuLf-Kc70kHx9UPHweckLJ0DpHXq_WNnU56cHOzaJZsBiH7zdfq-F2Hbr8QABgNOXkRqSE6pvvjtyIVMVx-WRrcTsQ3NplyLpgLeMPZ7MakCra2dmjG2B_qnqsjKI1r7kzZ3b7bZNBcF1Pt6_-YAxIKSXtzwj7_9Cmflk';

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
