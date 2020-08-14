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
  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];


  products: IProduct[] = [
   {
    "id": 1,
    "name": "Television",
    "code": 'Abc-555',
    "releaseDate": "August-14-2020",
    "description": "This is my first Product",
    "price": 400.0,
    "rating": 5,
    "imageUrl": "assets/images/img1.png"
   },
   {
    "id": 2,
    "name": "Freez",
    "code": 'xyz-484',
    "releaseDate": "August-14-2020",
    "description": "This is my Second Product",
    "price": 500.50,
    "rating": 4.5,
    "imageUrl": "assets/images/img2.png"
   }
  ];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.name.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

  constructor() { 
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit() {
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
