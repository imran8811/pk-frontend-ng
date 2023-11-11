import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { basePath } from 'src/endpoints';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';
import { Title } from '@angular/platform-browser';
import { RemoveDashPipe } from 'src/pipes';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  BASE_PATH = basePath;
  productDetails: IProduct[];
  productDept: string = this.route.snapshot.paramMap.get('dept');
  productCategory: string = this.route.snapshot.paramMap.get('category');
  articleNo: string = this.route.snapshot.paramMap.get('id');
  productImages = [];
  imageObject = [];
  loader:boolean = false;
  
  constructor(
    private productService: ProductService, 
    private route : ActivatedRoute,
    private title: Title,
    private removeDash : RemoveDashPipe
  ) { }
  
  ngOnInit(): void {
    this.loader = true;
    this.getProductDetails()
  }

  getProductDetails = () => {
    const res = this.productService.getProductDetails(this.productDept, this.productCategory, this.articleNo).subscribe(data => {
      console.log(data);
      this.productDetails = data;
      this.loader = false;
      this.title.setTitle(`${data[0].articleNo}-${data[0].category}-${data[0].fitting}-${data[0].color}`);
      // this.productImages = data[0].product_images
      // for(var i=0; i < this.productImages.length; i++){
      //   this.imageObject.push(
      //     {
      //       path: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
      //       thumbImage: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
      //       alt: this.productImages[i].path+'/'+this.productImages[i].name,
      //     }
      //   )
      // }
    })
  }
}
