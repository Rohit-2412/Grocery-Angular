import { Component } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss'],
})
export class BeveragesComponent {
  items = [
    {
      rating: 4,
      price: 18.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FAmul%20Kool.png?alt=media&token=85fe9ddd-ee51-4cc3-a0a3-10d68b0f2757',
      name: 'Amul Kool',
    },
    {
      name: 'Appy Fizz',
      price: 23.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FAppy%20Fizz.png?alt=media&token=6844a517-8d83-4647-b57f-679c08b31323',
      rating: 3,
    },
    {
      price: 25,
      name: 'B Fizz',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FB%20Fizz.png?alt=media&token=bc8bcf2b-e858-4e7a-b9d8-2c22572010e0',
      rating: 3.5,
    },
    {
      price: 24.99,
      name: 'Bisleri',
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FBisleri.png?alt=media&token=6b702903-8924-4c52-81c9-4801dfeb76fa',
    },
    {
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FBisleri.png?alt=media&token=6b702903-8924-4c52-81c9-4801dfeb76fa',
      name: 'Bisleri',
      price: 9.95,
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FFrooti.png?alt=media&token=1894ee80-677d-4091-a678-ba1676e1bece',
      price: 18.99,
      rating: 5,
      name: 'Frooti',
    },
    {
      price: 18.99,
      name: 'Frooti',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FFrooti.png?alt=media&token=1894ee80-677d-4091-a678-ba1676e1bece',
      rating: 3,
    },
    {
      name: 'Limonata',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FLimonata.png?alt=media&token=2977fa3f-9555-43f0-8387-9a22c5e9006a',
      rating: 3.5,
      price: 29.99,
    },
    {
      rating: 5,
      price: 43,
      name: 'Mountain Dew',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FMountain%20Dew.png?alt=media&token=8473dafd-6cf9-4893-b284-10e5210a8017',
    },
    {
      price: 108.99,
      rating: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FReal%20Fruit%20Juice.png?alt=media&token=1a0b0ef2-f6b6-4ee8-9896-085a55f0e48e',
      name: 'Real Fruit Juice',
    },
    {
      price: 89.99,
      rating: 4.5,
      name: 'Red Bull',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FRed%20Bull.png?alt=media&token=b9625fc1-fc79-4a2b-b794-ed245e024d12',
    },
    {
      price: 38.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FSting.png?alt=media&token=7f84a1a2-e81b-43cb-9602-a6c410980d93',
      rating: 4.5,
      name: 'Sting',
    },
    {
      rating: 5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/beverages%2FThumbs%20Up.png?alt=media&token=40c7d09b-90bf-40d1-a170-56fe2b9e08c1',
      price: 45,
      name: 'Thumbs Up',
    },
  ];
}
