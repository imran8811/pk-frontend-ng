import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'src/services';
import { IProduct } from 'src/models/product.model';

import { ActivatedRoute, Router } from '@angular/router';

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
    'category' : ['', Validators.required],
    'dept' : ['', Validators.required],
    'length' : ['', Validators.required],
    'slug' : ['', Validators.required],
  })

  get form() { return this.addProductForm.controls }

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {}

  fileOnChange = (e) => {
    if(e.target.files.length > 0) {
      this.imageUploadedSuccess = false;
      this.imageUploadedError = false;
      const formData = new FormData()
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        formData.append(`productImages[${i}]`, files[i])
      }
      formData.append('articleNo', this.form['articleNo'].value)
      this.productService.productImageUpload(formData).subscribe((data) => {
        console.log(data);
        if(data.type === 'success'){
          this.imageUploadedSuccess = true;
          this.imageUploadedError = false;
        }
      })
    }
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
      length: this.addProductForm.get('length').value,
      slug: this.addProductForm.get('slug').value,
    }
    this.productService.addProduct(data).subscribe(res => {
      if(res.type === 'success') {
        this.router.navigate(['/admin/products'])
      }  
    })
    
  }
  
}
