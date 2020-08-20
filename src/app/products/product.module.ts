import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', canActivate: [ProductDetailGuard] , component: ProductDetailComponent}
];

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  

})
export class ProductModule { }
