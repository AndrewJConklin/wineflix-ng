import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
