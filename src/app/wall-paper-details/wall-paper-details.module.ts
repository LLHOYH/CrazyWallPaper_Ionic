import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallPaperDetailsPageRoutingModule } from './wall-paper-details-routing.module';

import { WallPaperDetailsPage } from './wall-paper-details.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallPaperDetailsPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [WallPaperDetailsPage]
})
export class WallPaperDetailsPageModule {}
