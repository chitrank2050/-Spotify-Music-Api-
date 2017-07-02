import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { SearchComponent } from '../components/search/search.component'
import {ArtistComponent} from '../components/artist/artist.component';


/*Router Config*/
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent }, 
  { path: '', redirectTo:'/search', pathMatch: 'full'},
  { path: 'artist/:id', component: ArtistComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
