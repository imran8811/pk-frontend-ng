import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { IProduct } from 'src/models';

import { ProductService } from 'src/services';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})

export class EditProductComponent implements OnInit {
  productDetails: IProduct[];
  productDept: string = this.route.snapshot.paramMap.get('dept');
  productCategory: string = this.route.snapshot.paramMap.get('category');
  articleNo: string = this.route.snapshot.paramMap.get('id');

  imageUploadForm = this.fb.group({
    'article_no' : ['', Validators.required],
    'product_images' : ['', Validators.required]
  })

  updateProductForm = this.fb.group({
    'sizes' : ['', Validators.required],
    'colors' : ['', Validators.required],
    'fitting' : ['', Validators.required],
    'fabric' : ['', Validators.required],
    'fabric_weight' : ['', Validators.required],
    'wash_type' : ['', Validators.required],
    'moq' : ['', Validators.required],
    'price' : ['', Validators.required],
    'article_no' : ['', Validators.required],
    'category' : ['', Validators.required],
    'type' : ['', Validators.required],
    'length' : ['', Validators.required],
    'slug' : ['', Validators.required],
  })

  get form() { return this.updateProductForm.controls }

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetails(this.productDept, this.productCategory, this.articleNo);
  }

  getProductDetails = (productDept, productCategory, articleNo) => {
    const res = this.productService.getProductDetails(productDept, productCategory, articleNo).subscribe(res => {
      res.map(data => {
        this.updateProductForm = this.fb.group({
          'sizes' : [data.sizes, Validators.required],
          'colors' : [data.color, Validators.required],
          'fitting' : [data.fitting, Validators.required],
          'fabric' : [data.fabric, Validators.required],
          'fabric_weight' : [data.fabricWeight, Validators.required],
          'wash_type' : [data.wash_type, Validators.required],
          'moq' : [data.moq, Validators.required],
          'price' : [data.price, Validators.required],
          'article_no' : [data.articleNo, Validators.required],
          'category' : [data.category, Validators.required],
          'type' : [data.type, Validators.required],
          'length' : [data.length, Validators.required],
          'slug' : [data.slug, Validators.required],
        })
      })
    })
  }

  fileOnChange = (e) => {
    const formData = new FormData()
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append(`product_images[${i}]`, files[i])
    }
    formData.append('article_no', this.form['article_no'].value)
    const res = this.productService.productS3ImageUpload(formData, '').subscribe(data => data)
  } 

  onSubmit = () => {
    const data = {
      articleNo: this.articleNo,
      sizes: this.updateProductForm.get('sizes').value,
      colors: this.updateProductForm.get('colors').value,
      fitting: this.updateProductForm.get('fitting').value,
      fabric: this.updateProductForm.get('fabric').value,
      fabric_weight: this.updateProductForm.get('fabric_weight').value,
      wash_type: this.updateProductForm.get('wash_type').value,
      price: this.updateProductForm.get('price').value,
      moq: this.updateProductForm.get('moq').value,
      article_no: this.updateProductForm.get('article_no').value,
      category: this.updateProductForm.get('category').value,
      type: this.updateProductForm.get('type').value,
      length: this.updateProductForm.get('length').value,
      slug: this.updateProductForm.get('slug').value,
    }
    this.productService.updateProduct(data).subscribe(res => {
      if(res.type === 'success') {
        this.router.navigate(['/admin/products'])
      }  
    })
  }
}
