import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';
import { Title, Meta } from '@angular/platform-browser';
import { GLOBAL_CONSTANTS } from 'src/constants/global.constants';
import { environment } from '../../../../environments/environment.prod'
import * as AWS from 'aws-sdk';
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

  S3 = new AWS.S3({
    region : environment.s3Config.region,
    credentials: {
      accessKeyId : environment.s3Config.accessKey,
      secretAccessKey : environment.s3Config.secretAccessKey,
    }
  });

  singleSignedURL:string = '';

  constructor(private fb: FormBuilder, private productService: ProductService, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    const params = {
      Bucket: environment.s3Config.bucket,
      Key : "men/jeans-pant/10051/front-img.jpg",
      Expires: 60
    }
    const res = this.S3.getSignedUrl('getObject', params);
    this.singleSignedURL = res.split('?')[0];
    console.log(res);
    console.log(this.singleSignedURL);
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
    this.products = this.productService.getProductByDeptCategory(GLOBAL_CONSTANTS.DEFAULT_DEPT, GLOBAL_CONSTANTS.DEFAULt_CATEGORY);
    this.loader = false
  } 

}
