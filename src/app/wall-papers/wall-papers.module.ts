import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallPapersPageRoutingModule } from './wall-papers-routing.module';

import { WallPapersPage } from './wall-papers.page';

import { IonicImageLoader } from 'ionic-image-loader';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallPapersPageRoutingModule,
    IonicImageLoader
  ],
  declarations: [WallPapersPage]
})
export class WallPapersPageModule {}
