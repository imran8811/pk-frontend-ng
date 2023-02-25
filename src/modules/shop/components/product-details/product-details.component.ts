import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { basePath } from 'src/endpoints';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';
import { NgImageSliderComponent } from 'ng-image-slider'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  BASE_PATH = basePath;
  productDetails: IProduct[];
  productId: string = this.route.snapshot.paramMap.get('id');
  productImages = [];
  imageObject = [];
  
  constructor(private productService: ProductService, private route : ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails = () => {
    const res = this.productService.getProductDetails(this.productId).subscribe(data => {
      this.productDetails = data;
      this.productImages = data[0].product_images
      for(var i=0; i < this.productImages.length; i++){
        this.imageObject.push(
          {
            image: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
            thumbImage: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
            alt: this.productImages[i].path+'/'+this.productImages[i].name,
          }
        )
      }
    })
  }
}
