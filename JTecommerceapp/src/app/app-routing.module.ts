import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'', redirectTo: '/homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path:'shop', component:ShopComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  { path: '**', redirectTo: '/homepage' } // Catch any unknown paths and redirect to homepage

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
