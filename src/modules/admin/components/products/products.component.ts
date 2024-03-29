import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/models/product.model';

import { ProductService, GlobalService  } from 'src/services';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL_CONSTANTS } from 'src/constants/global.constants';
import { BASE_URL } from 'src/app-routes'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  products: IProduct[];
  BASE_URL = BASE_URL;

  constructor(private globalService: GlobalService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductByDeptCategory();
  }

  getProductByDeptCategory = () => {
    this.productService.getProductByDeptCategory(GLOBAL_CONSTANTS.DEFAULT_DEPT, GLOBAL_CONSTANTS.DEFAULt_CATEGORY).subscribe(res => {
      this.products = res;
    })
  }

  deleteProduct = (dept, category, articleNo) => {
    const confirmation = window.confirm('Are you sure?');
    if(confirmation) {
      this.productService.deleteProduct(dept, category, articleNo).subscribe(res => {
        if(res.type === 'success'){
          this.globalService.reloadCurrentRoute();      
        }
      })
    }
  }
  
}
