import { Component,OnInit } from '@angular/core';

import { SpotifyService } from './services/spotify.service'
//Components
import {NavbarComponent} from './components/navbar/navbar.component';

//Jquery Variable
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SpotifyService]
})
export class AppComponent implements OnInit {
  constructor(){

  }
  title="Angular-cli + Foundation";
  para = "This is a quickseed for Angular 4 with .scss styles";
 ngOnInit() {
    $(document).foundation();
  }
}
