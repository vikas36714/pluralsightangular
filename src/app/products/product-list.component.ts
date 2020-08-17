import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


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
  errorMessage: string;

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  constructor(private productService: ProductService) {  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:IProduct[]) => {
      this.products = res;
      this.filteredProducts = this.products;
    },
    error => this.errorMessage = error
    )
  }

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List : '+ message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.name.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }


  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
