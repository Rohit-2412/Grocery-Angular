import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { WelcomeOfferComponent } from './welcome-offer/welcome-offer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannersComponent } from './banners/banners.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { FooterComponent } from './footer/footer.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HeadingComponent } from './heading/heading.component';
import { ShopComponent } from './shop/shop.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { SnacksComponent } from './snacks/snacks.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WelcomeOfferComponent,
    CarouselComponent,
    BannersComponent,
    TopCategoriesComponent,
    FooterComponent,
    FruitsComponent,
    ProductItemComponent,
    HeadingComponent,
    ShopComponent,
    VegetablesComponent,
    BeveragesComponent,
    ChocolateComponent,
    SnacksComponent,
    AboutComponent,
    ReviewComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
