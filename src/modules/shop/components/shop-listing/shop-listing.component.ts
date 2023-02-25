import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';
import { Title, Meta } from '@angular/platform-browser';

import { basePath } from 'src/endpoints';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-listing',
  templateUrl: './shop-listing.component.html',
  styleUrls: ['./shop-listing.component.scss']
})
export class ShopListingComponent implements OnInit {
  category: string = 'men'
  type: string = 'jeans-pant'
  products: IProduct[];
  BASE_PATH = basePath;
  loader:boolean = false;
  shopFilters: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.loader = true
    this.getProductsListing()
    this.title.setTitle('Wholesale Shop - PK Apparel')
    this.meta.addTags([
      {name: 'keywords', content: 'Jeans Wholesale Shop, Jeans Pants Wholesale Shop'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
    this.shopFilters = this.fb.group({
      category : ["men", Validators.required],
      type : ["jeans-pants", Validators.required]
    })
  }

  getProductsListing = () => {
    const res = this.productService.getAllProducts().subscribe(data => {
      this.products = data
      this.loader = false
    });
  } 

}
