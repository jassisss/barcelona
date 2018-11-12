import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SiteModule} from './site/site.module';
import {routing} from './app.routing';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiteModule,
    AuthModule,
    AdminModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
