import { Component } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss'],
})
export class SnacksComponent {
  items = [
    {
      name: 'Bingo Chili',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FBingo%20Chili.png?alt=media&token=c8317656-915a-40d7-80ed-1af0c071ecce',
      rating: 5,
      price: 9.99,
    },
    {
      name: 'Bingo Masala',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FBingo%20Masala.png?alt=media&token=6c77c727-f971-4691-b118-800bb3e06ab4',
      rating: 3,
      price: 9.99,
    },
    {
      rating: 4,
      name: 'Bingo Yumitos',
      price: 18.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FBingo%20Yumitos.png?alt=media&token=313967a5-4d5f-4481-9543-9b426c9bf353',
    },
    {
      rating: 5,
      price: 8.99,
      name: 'Classic Salted',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FClassic%20Salted.png?alt=media&token=f6f04921-56f0-47ee-846e-ac90833cdcdb',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FCream%20And%20Onion.png?alt=media&token=9d939514-0e60-41ed-8cac-9947aca7089f',
      price: 18.99,
      name: 'Cream And Onion',
      rating: 4.5,
    },
    {
      price: 18.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FCream%20N%20Onion.png?alt=media&token=b5b57a08-56bd-4579-92ce-68be7eabb0f4',
      name: 'Cream N Onion',
      rating: 5,
    },
    {
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FCream%20N%20Onion.png?alt=media&token=b5b57a08-56bd-4579-92ce-68be7eabb0f4',
      price: 8.99,
      name: 'Cream N Onion',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FFlamin%20Hot.png?alt=media&token=33b9ea76-ef69-4fcc-bd92-c07b3ad7ebb8',
      rating: 5,
      price: 38.99,
      name: 'Flamin Hot',
    },
    {
      price: 18.99,
      rating: 3,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FLay's%20Ketchup.png?alt=media&token=1e88a1e5-aa5a-4659-84e4-9b4d3c458e59",
      name: "Lay's Ketchup",
    },
    {
      rating: 4.5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FLays%20Classic.png?alt=media&token=bd63f211-a661-4ee9-a0db-d1a00a288d77',
      price: 9.99,
      name: 'Lays Classic',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FMagic%20Masala.png?alt=media&token=f46cab13-d318-4b2e-9b19-741552943ac0',
      name: 'Magic Masala',
      price: 18.99,
      rating: 3,
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FMasala%20Masti.png?alt=media&token=08a93831-9aa6-4420-ad0c-35b6d75b49cc',
      name: 'Masala Masti',
      price: 8.99,
      rating: 3,
    },
    {
      price: 18.99,
      name: 'Masala Mayhem',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FMasala%20Mayhem.png?alt=media&token=3d547bf8-0dc4-4977-bb2e-c1bb6efd7ecb',
      rating: 3,
    },
    {
      name: 'Nacho Cheese',
      price: 28.99,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FNacho%20Cheese.png?alt=media&token=5d266cd4-58f5-493f-a8ec-48fe334ce877',
      rating: 5,
    },
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FParle's%20Wafers.png?alt=media&token=b6929757-de59-4499-bfdb-885380038020",
      price: 18.99,
      name: "Parle's Wafers",
      rating: 3.5,
    },
    {
      price: 10,
      name: 'Piri Piri',
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FPiri%20Piri.png?alt=media&token=8d6818f7-7bb3-45da-8f76-440f4c6410c4',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FSalt%20%26%20Vinegar.png?alt=media&token=5f231e7c-2426-4602-af19-1cff82ced5b6',
      rating: 4.5,
      price: 14.99,
      name: 'Salt & Vinegar',
    },
    {
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FSweet%20Chili.png?alt=media&token=45e026a8-9036-4863-9e46-b950dba48390',
      name: 'Sweet Chili',
      rating: 3.5,
      price: 18.99,
    },
    {
      name: 'Uncle Chips',
      rating: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/grocery-55db1.appspot.com/o/snacks%2FUncle%20Chips.png?alt=media&token=57cc3500-bd50-45ff-aa46-7f04e9e7ed66',
      price: 23.99,
    },
  ];
}
