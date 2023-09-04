import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  { path: 'users', component: UsersListComponent },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
