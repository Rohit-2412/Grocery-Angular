import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent {
  items = [
    {
      name: 'Apple',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FApple.png?alt=media&token=50f0e643-1afc-4070-95ff-a478b330aa45',
      rating: 5,
      price: 120,
    },
    {
      rating: 5,
      name: 'Cherry',
      price: 50,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FCherry.png?alt=media&token=3b85f0dc-0e7d-4a01-931f-c5bdcdfacce6',
    },
    {
      rating: 4.5,
      name: 'Grapes',
      price: 80,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FGrapes.png?alt=media&token=a5165f3c-9934-42e1-a4c8-93a3ad2b2c44',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FGreen%20Apple.png?alt=media&token=766524c4-4679-441d-910c-223046de4227',
      rating: 4.5,
      name: 'Green Apple',
      price: 150,
    },
    {
      rating: 3,
      price: 40,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FGuava.png?alt=media&token=594e4e0e-ad96-4d5e-8973-aa41724049bd',
      name: 'Guava',
    },
    {
      name: 'Kiwi Fruit',
      rating: 5,
      price: 100,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FKiwi%20Fruit.png?alt=media&token=93ca07ce-ce4d-49dc-addc-0c2ed7782ca3',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FLemon.png?alt=media&token=602b6daf-b376-4a34-ade5-6d7c2ac74cca',
      price: 5,
      name: 'Lemon',
      rating: 5,
    },
    {
      name: 'Mango',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FMango.png?alt=media&token=fd2949e1-2c6d-47d8-8f4f-c8001c8c45a3',
      price: 45,
      rating: 4,
    },
    {
      price: 60,
      rating: 3.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FPapaya.png?alt=media&token=dc41bd27-eb42-44df-95f5-e04e52f52b0f',
      name: 'Papaya',
    },
    {
      price: 50,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FPineapple.png?alt=media&token=a1ff5d2c-49ab-46c3-992c-a27b888efed4',
      name: 'Pineapple',
      rating: 3.5,
    },
    {
      name: 'Pomegranate',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FPomegranate.png?alt=media&token=26926543-acb6-482f-8d46-0e8a05d94e78',
      price: 100,
      rating: 4,
    },
    {
      price: 25,
      name: 'Watermelon',
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FWatermelon.png?alt=media&token=cb6750f0-f90c-484d-b7db-ef5655fcee42',
    },
  ];
}
