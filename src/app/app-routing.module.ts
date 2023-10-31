import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { BlogComponent } from './blog/blog.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { ContactComponent } from './contact/contact.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ReviewComponent } from './review/review.component';
import { ShopComponent } from './shop/shop.component';
import { SnacksComponent } from './snacks/snacks.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fruits',
    component: FruitsComponent,
  },
  {
    path: 'vegetables',
    component: VegetablesComponent,
  },
  {
    path: 'snacks',
    component: SnacksComponent,
  },
  {
    path: 'chocolate',
    component: ChocolateComponent,
  },
  {
    path: 'beverages',
    component: BeveragesComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
