import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';
import { Title, Meta } from '@angular/platform-browser';
import { GLOBAL_CONSTANTS } from 'src/constants/global.constants';

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
  quantityPerCategory = {
    men : 0,
    women : 0,
    boys : 0,
    girls : 0,
    jeansPants : 0,
    chinoPants : 0,
    cargoTrousers : 0,
    slim: 0,
    straght: 0,
    skinny: 0,
    ankle: 0,
    skyBlue: 0,
    midBlue: 0,
    navyBlue: 0,
    black: 0,
    destroyed: 0,
    ripped: 0,
    silicone: 0
  }

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
    const res = this.productService.getProductByDeptCategory(GLOBAL_CONSTANTS.DEFAULT_DEPT, GLOBAL_CONSTANTS.DEFAULt_CATEGORY).subscribe(data => {
      console.log(data);
      this.products = data
      this.loader = false

    });
  } 

}
