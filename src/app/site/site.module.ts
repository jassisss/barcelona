import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { MainComponent } from './components/main/main.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class SiteModule { }
