import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallPaperDetailsPage } from './wall-paper-details.page';

const routes: Routes = [
  {
    path: '',
    component: WallPaperDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallPaperDetailsPageRoutingModule {}
