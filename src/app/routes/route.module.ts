import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { SearchComponent } from '../components/search/search.component'

/*Router Config*/
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent }, 
  { path: '', redirectTo:'/search', pathMatch: 'full'}
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
