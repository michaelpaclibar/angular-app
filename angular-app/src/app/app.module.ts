import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';


import {NavComponent} from './views/navbar/nav.component';
import {NgprimeModule} from './modules/ngprime/ngprime.module';
import {HomeComponent} from './views/home/home.component';
import {QuotesComponent} from './views/quotes/quotes.component';
import {QuoteLinesComponent} from './views/quote-lines/quote-lines.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'quotelines', component: QuoteLinesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuotesComponent,
    QuoteLinesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgprimeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
