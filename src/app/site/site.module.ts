import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { MainComponent } from './components/main/main.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {ButtonsModule, CarouselModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    WavesModule,
    ButtonsModule,
    NavbarModule
  ],
  declarations: [MainComponent]
})
export class SiteModule { }
