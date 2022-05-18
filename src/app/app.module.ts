import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { LinkComponent } from './link/link.component';
import { WineComponent } from './wine/wine.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { ControlComponent } from './control/control.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HeroComponent,
    MainComponent,
    LinkComponent,
    WineComponent,
    KeepDrinkingComponent,
    ControlComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
