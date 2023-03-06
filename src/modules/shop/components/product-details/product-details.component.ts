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
  productId: string = this.route.snapshot.paramMap.get('id');
  productImages = [];
  imageObject = [];
  
  constructor(
    private productService: ProductService, 
    private route : ActivatedRoute,
    private title: Title,
    private removeDash : RemoveDashPipe
  ) { }
  
  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails = () => {
    const res = this.productService.getProductDetails(this.productId).subscribe(data => {
      this.productDetails = data;
      this.title.setTitle(`${data[0].article_no}-${data[0].category.toUpperCase()}-${data[0].fitting.toUpperCase()} Fit-${this.removeDash.transform(data[0].type).toUpperCase()}-${data[0].colors}`)
      this.productImages = data[0].product_images
      for(var i=0; i < this.productImages.length; i++){
        this.imageObject.push(
          {
            path: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
            thumbImage: basePath+'/'+this.productImages[i].path+'/'+this.productImages[i].name,
            alt: this.productImages[i].path+'/'+this.productImages[i].name,
          }
        )
      }
    })
  }
}
