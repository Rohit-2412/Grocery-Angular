import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  topRatedProducts = [
    {
      rating: 5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FApple.png?alt=media&token=50f0e643-1afc-4070-95ff-a478b330aa45',
      name: 'Apple',
      price: 120,
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FCapsicum.png?alt=media&token=15f62d00-ba90-4481-825f-8a3554cb3fcc',
      rating: 5,
      price: 45,
      name: 'Capsicum',
    },
    {
      rating: 5,
      price: 600,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/tea-coffee%2FTata%20Tea%20Gold.png?alt=media&token=d386411b-d176-4f07-a37b-4ec960d56158',
      name: 'Tata Tea Gold',
    },
    {
      price: 9.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FBingo%20Chili.png?alt=media&token=c8317656-915a-40d7-80ed-1af0c071ecce',
      name: 'Bingo Chili',
      rating: 5,
    },
    {
      name: 'Pomegranate',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/fruits%2FPomegranate.png?alt=media&token=26926543-acb6-482f-8d46-0e8a05d94e78',
      price: 100,
      rating: 4,
    },
  ];
}
