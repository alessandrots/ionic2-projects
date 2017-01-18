import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ListPage } from '../pages/list-page/list-page';
import { UserListPage } from '../pages/list-user/list-user';
import { MapaPage }  from '../pages/mapa/mapa';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ListPage,
    UserListPage,
    MapaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ListPage,
    UserListPage,
    MapaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
