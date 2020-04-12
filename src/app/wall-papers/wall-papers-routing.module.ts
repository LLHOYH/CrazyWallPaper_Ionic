import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallPapersPage } from './wall-papers.page';

const routes: Routes = [
  {
    path: '',
    component: WallPapersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallPapersPageRoutingModule {}
