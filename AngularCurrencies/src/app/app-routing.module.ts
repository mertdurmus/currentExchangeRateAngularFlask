import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcurrenciesComponent } from './showcurrencies/showcurrencies.component';

const routes: Routes = [{ path: 'currency', component: ShowcurrenciesComponent },
{ path: '', redirectTo: '/currency', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
