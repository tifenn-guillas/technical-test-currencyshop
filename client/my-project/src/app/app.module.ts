import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app.routing.module';

import { ConfigService } from './core/config.service';
import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ConfigService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
