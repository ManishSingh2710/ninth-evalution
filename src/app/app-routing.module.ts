import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
 { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},{
   path: 'home',
   component: AppComponent
},
  // { path: '', redirectTo:'dashboard', pathMatch: 'full'}, 
  // { path: '/dashboard', component: DashboardComponent },
  { path:'/invoice', component: InvoiceComponent},
  { path:'/profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
