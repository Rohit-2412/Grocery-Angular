import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss'],
})
export class VegetablesComponent {
  items = [
    {
      price: 60,
      name: 'Amla',
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FAmla.png?alt=media&token=7a170e28-3a11-4be2-bb4e-92dde471bd43',
    },
    {
      name: 'Bitter Gourd',
      price: 40,
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FBitter%20Gourd.png?alt=media&token=9b715c60-4d3c-4553-aecd-77cb30d2b974',
    },
    {
      name: 'Brinjal',
      price: 60,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FBrinjal.png?alt=media&token=a693464f-02af-4a4c-a72a-f92ff6245558',
      rating: 4.5,
    },
    {
      price: 60,
      name: 'Broccoli',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FBroccoli.png?alt=media&token=47c30148-a4a4-4091-a64f-193f0f8a672c',
      rating: 3.5,
    },
    {
      price: 50,
      rating: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FCapsicum.png?alt=media&token=15f62d00-ba90-4481-825f-8a3554cb3fcc',
      name: 'Capsicum',
    },
    {
      rating: 5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FCapsicum.png?alt=media&token=15f62d00-ba90-4481-825f-8a3554cb3fcc',
      price: 45,
      name: 'Capsicum',
    },
    {
      rating: 5,
      price: 75,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FCoriander.png?alt=media&token=b32b7e25-667a-440d-91db-d3d3c6501b7d',
      name: 'Coriander',
    },
    {
      price: 40,
      name: 'Corn',
      rating: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FCorn.png?alt=media&token=7dfff4d9-cdb4-4720-a9e3-6430c74e5491',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FGinger.png?alt=media&token=1514812c-9b96-47d1-96ed-249bf795337c',
      rating: 3,
      price: 120,
      name: 'Ginger',
    },
    {
      rating: 4,
      name: 'Green Chili',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FGreen%20Chili.png?alt=media&token=2920d5bd-805a-457f-a247-d002f77d04af',
      price: 80,
    },
    {
      name: 'Kale',
      rating: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FKale.png?alt=media&token=70c60a36-04ec-4b22-a20f-03a69a1b8b11',
      price: 60,
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FMushroom.png?alt=media&token=b50e42e3-0c1c-42ae-83ac-e0c14e68c1e1',
      price: 40,
      rating: 3.5,
      name: 'Mushroom',
    },
    {
      price: 40,
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FOkra.png?alt=media&token=decb4e1a-d0dd-4c6f-96ee-f3de69d2c972',
      name: 'Okra',
    },
    {
      rating: 3.5,
      price: 60,
      name: 'Onion',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FOnion.png?alt=media&token=64bd7848-f852-4906-bffe-0d6755723703',
    },
    {
      price: 40,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FPotato.png?alt=media&token=de22e560-a749-4e76-b608-a7af11461ded',
      rating: 4.5,
      name: 'Potato',
    },
    {
      rating: 4,
      name: 'Red Chili',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FRed%20Chili.png?alt=media&token=fc9f78a1-48c2-4e00-b8aa-b75447e7a678',
      price: 80,
    },
    {
      name: 'Tomato',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FTomato.png?alt=media&token=c2bfc3a5-2a00-487c-bff4-4d789a3e99a9',
      rating: 5,
      price: 40,
    },
    {
      name: 'Turnip',
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/vegetables%2FTurnip.png?alt=media&token=3ef01cba-0f2a-4dfd-ba1a-45ba4d027391',
      price: 60,
    },
  ];
}
