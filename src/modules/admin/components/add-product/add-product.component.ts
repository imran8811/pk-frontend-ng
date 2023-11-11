import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'src/services';
import { IProduct } from 'src/models/product.model';
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  imgFile = '';
  files;
  selectedFile: File;
  imageUploadedSuccess:boolean = false;
  imageUploadedError:boolean = false;

  stepProductInfoStatus:boolean = true;
  stepUploadImagesStatus:boolean = false;
  uploadedImages:string[] = [];
  latestArticleNo:IProduct;

  imageUploadForm = this.fb.group({
    'articleNo' : ['', Validators.required],
    'productImages' : ['', Validators.required]
  })

  addProductForm = this.fb.group({
    'sizes' : ['', Validators.required],
    'color' : ['', Validators.required],
    'fitting' : ['', Validators.required],
    'fabric' : ['', Validators.required],
    'fabricWeight' : ['', Validators.required],
    'washType' : ['', Validators.required],
    'moq' : ['', Validators.required],
    'price' : ['', Validators.required],
    'articleNo' : ['', Validators.required],
    'category' : ['jeans-pant', Validators.required],
    'dept' : ['men', Validators.required],
    'slug' : ['', Validators.required],
  })

  get form() { return this.addProductForm.controls }

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getArticleNo();
  }

  fileOnChange = async(e, imgType) => {
    if(e.target.files.length > 0) {
      this.imageUploadedSuccess = false;
      this.imageUploadedError = false;
      const formData = new FormData();
      const files = e.target.files;
      formData.append('images', files)
      const productDept = this.addProductForm.get('dept').value;
      const productCategory = this.addProductForm.get('category').value;
      const articleNo =  this.addProductForm.get('articleNo').value;
      const getUploadURL = await this.productService.generateUploadUrl(articleNo, productDept, productCategory, imgType).then(res => res);
      console.log(getUploadURL);
      try {
        this.productService.productS3ImageUpload(getUploadURL, formData).subscribe(res => res);
        this.uploadedImages.push(imgType);
        this.imageUploadedSuccess = true;
        console.log(this.uploadedImages)
      } catch(err) {
        this.imageUploadedError = true;
        console.log(err)
      }
    }
  } 
  
  stepUploadImages(){
    if(this.addProductForm.invalid){
      this.addProductForm.markAllAsTouched();
      return;
    }
    this.stepProductInfoStatus = !this.stepProductInfoStatus;
    this.stepUploadImagesStatus = !this.stepUploadImagesStatus;
  }

  previousStep(){
    this.stepProductInfoStatus = !this.stepProductInfoStatus;
    this.stepUploadImagesStatus = !this.stepUploadImagesStatus;
  }

  onSubmit = () => {
    const data = {
      sizes: this.addProductForm.get('sizes').value,
      color: this.addProductForm.get('color').value,
      fitting: this.addProductForm.get('fitting').value,
      fabric: this.addProductForm.get('fabric').value,
      fabricWeight: this.addProductForm.get('fabricWeight').value,
      washType: this.addProductForm.get('washType').value,
      price: this.addProductForm.get('price').value,
      moq: this.addProductForm.get('moq').value,
      articleNo: this.addProductForm.get('articleNo').value,
      category: this.addProductForm.get('category').value,
      dept: this.addProductForm.get('dept').value,
      slug: this.addProductForm.get('slug').value,
    }
    this.productService.addProduct(data).subscribe(res => {
      if(res.type === 'success') {
        this.router.navigate(['/admin/products'])
      }  
    })
  }

  getArticleNo(){
    this.productService.getArticleNo().subscribe(res => {
      console.log(res);
      const addOne = Number(res+1).toString();
      this.addProductForm.controls['articleNo'].setValue(addOne);
      this.addProductForm.controls['articleNo'].disable();
    });
  }
  
}
