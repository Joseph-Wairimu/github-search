import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: ' Homepage', component:  HomepageComponent },
  { path: 'Search-User', component: SearchUserComponent },
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/Homepage", pathMatch:"full"},
  { path: 'Search-Repository', component:  SearchRepositoryComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
