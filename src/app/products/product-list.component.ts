import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 60;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [
   {
    "id": 1,
    "name": "Television",
    "code": 'Abc',
    "releaseDate": "August-14-2020",
    "description": "This is my first Product",
    "price": 400.0,
    "rating": 5,
    "imageUrl": "assets/images/img1.png"
   },
   {
    "id": 2,
    "name": "Freez",
    "code": 'xyz',
    "releaseDate": "August-14-2020",
    "description": "This is my Second Product",
    "price": 500.50,
    "rating": 4.5,
    "imageUrl": "assets/images/img2.png"
   }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
