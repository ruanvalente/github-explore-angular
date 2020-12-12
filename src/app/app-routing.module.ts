import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { RepositoryInfoComponent } from './components/repository-info/repository-info.component';

const routes: Routes = [
  { path: '', component: SearchComponent, pathMatch: 'full' },
  { path: 'repository/:repository', component: RepositoryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
