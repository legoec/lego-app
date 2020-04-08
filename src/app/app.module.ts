import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularTokenModule } from 'angular-token';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { loadUser } from './providers/load-user';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: `${environment.apiBase}/v0`
    }),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers, {}),

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: loadUser,
      deps: [Injector, Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
