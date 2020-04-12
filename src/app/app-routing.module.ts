import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './Resolver/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'wall-papers', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'wall-papers',
    loadChildren: () => import('./wall-papers/wall-papers.module').then( m => m.WallPapersPageModule)
  },
  {
    path: 'wall-paper-details',
    loadChildren: () => import('./wall-paper-details/wall-paper-details.module').then( m => m.WallPaperDetailsPageModule)
  },
  {
    path: 'wall-paper-details/:id',
    resolve:{
      photoUrl:DataResolverService
    },
    loadChildren: () => import('./wall-paper-details/wall-paper-details.module').then( m => m.WallPaperDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
