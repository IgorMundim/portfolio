import { Routes, ExtraOptions, InMemoryScrollingOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoreComponent } from './pages/more/more.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'more',
    component: MoreComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  },
];
