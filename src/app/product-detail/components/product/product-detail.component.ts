import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  constructor(
    private activeRoute: ActivatedRoute,
    private _products: ProductsService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.product = this._products.getProduct( param.id );
        console.log( this.product );
      }
    );
  }

}
