import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/models/product.model';

import { ProductService, GlobalService  } from 'src/services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { basePath } from 'src/endpoints'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  products: IProduct[];
  BASE_PATH = basePath;

  constructor(private globalService: GlobalService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts = () => {
    const res = this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct = (article_no) => {
    const confirmation = window.confirm('Are you sure?');
    if(confirmation) {
      this.productService.deleteProduct(article_no).subscribe(res => {
        if(res.type === 'success'){
          this.globalService.reloadCurrentRoute();      
        }
      })
    }
  }
  
}
