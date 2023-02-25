import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services';
import { IProduct } from 'src/models/product.model';
import { basePath } from 'src/endpoints'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})

export class ProductListingComponent implements OnInit {
  @Input() category = ''
  @Input() type = ''
  BASE_ROUTE = basePath

  productListing:IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getTopProducts()  
  }

  getTopProducts = () => {
    this.productService.getTopProducts(this.category, this.type).subscribe(res => {
      this.productListing = res;
    })
  }
}
