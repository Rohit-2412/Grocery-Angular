import { Component } from '@angular/core';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.scss'],
})
export class ChocolateComponent {
  items = [
    {
      name: '5 Star',
      price: 10,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2F5%20Star.png?alt=media&token=de2d6b17-8d4c-4444-9c27-809d8cb8acd1',
      rating: 5,
    },
    {
      rating: 4.5,
      price: 30,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FCadbury%20Fuse.png?alt=media&token=b3654772-8aa7-465e-a888-0697d1f36a74',
      name: 'Cadbury Fuse',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FDairy%20Milk.png?alt=media&token=126362e5-961b-46c3-8ad4-82a8b7cb78f9',
      name: 'Dairy Milk',
      rating: 4.5,
      price: 10,
    },
    {
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FDairy%20Milk%20Silk.png?alt=media&token=406a4aa3-0c96-406d-9b49-5c2efaced6f1',
      name: 'Dairy Milk Silk',
      price: 50,
    },
    {
      rating: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FFerrero%20Rocher.png?alt=media&token=eca00d72-0512-4cd1-a908-b3a90de077b9',
      name: 'Ferrero Rocher',
      price: 865,
    },
    {
      price: 10,
      name: 'KitKat',
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FKitKat.png?alt=media&token=c55f2034-a38a-436f-b4a9-aea941ff011a',
    },
    {
      name: 'Nestle ChocoBar',
      price: 40,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FNestle%20ChocoBar.png?alt=media&token=1f24cadf-ffc7-4767-b78e-da3dd9817e2e',
      rating: 4.5,
    },
    {
      name: 'Nestle Classic',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FNestle%20Classic.png?alt=media&token=fc1d208f-238a-4f98-9ccf-f84841847bd6',
      rating: 5,
      price: 20,
    },
    {
      price: 30,
      name: 'Silk Bubbly',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FSilk%20Bubbly.png?alt=media&token=963969b0-4b1b-4b42-9df6-b85084f95b99',
      rating: 4.5,
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FSilk%20Bubbly.png?alt=media&token=963969b0-4b1b-4b42-9df6-b85084f95b99',
      name: 'Silk Bubbly',
      rating: 4.5,
      price: 100,
    },
    {
      price: 50,
      name: 'Silk Oreo',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FSilk%20Oreo.png?alt=media&token=682275cc-a88d-4cff-8fed-9e00e465e47b',
      rating: 4.5,
    },
    {
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/chocolate%2FWhite%20Chocomass.png?alt=media&token=f9b3cee0-d59e-4cb2-a61e-341ca0243c92',
      name: 'White Chocomass',
      price: 50,
    },
  ];
}
