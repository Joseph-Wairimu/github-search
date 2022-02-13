import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: ' Homepage', component:  HomepageComponent },
  { path: 'Search-User', component: SearchUserComponent },
  { path: 'Search-Repository', component:  SearchRepositoryComponent},
  { path:'**', component:NotFoundComponent},
  // { path: '', redirectTo:"/Homepage", pathMatch:"full"},
  // { path: '', component: HomepageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
