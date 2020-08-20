import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
      let id = +this.route.snapshot.paramMap.get('id')
      this.pageTitle += `: ${id}`;

       this.productService.getProduct(id).subscribe((res: any) => {
        console.log(res);
        this.product = res;
       })
  }

  onBack(){
    this.router.navigate(['/products']);
  }

}
