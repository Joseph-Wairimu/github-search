import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: 'Search-User', component: SearchUserComponent },
  { path: 'about', component: AboutComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
