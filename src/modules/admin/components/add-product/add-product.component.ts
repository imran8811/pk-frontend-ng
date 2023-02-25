import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'src/services';
import { IProduct } from 'src/models/product.model';

import { ToastrService } from 'ngx-toastr';
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
    'article_no' : ['', Validators.required],
    'product_images' : ['', Validators.required]
  })

  addProductForm = this.fb.group({
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
        formData.append(`product_images[${i}]`, files[i])
      }
      formData.append('article_no', this.form['article_no'].value)
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
      colors: this.addProductForm.get('colors').value,
      fitting: this.addProductForm.get('fitting').value,
      fabric: this.addProductForm.get('fabric').value,
      fabric_weight: this.addProductForm.get('fabric_weight').value,
      wash_type: this.addProductForm.get('wash_type').value,
      price: this.addProductForm.get('price').value,
      moq: this.addProductForm.get('moq').value,
      article_no: this.addProductForm.get('article_no').value,
      category: this.addProductForm.get('category').value,
      type: this.addProductForm.get('type').value,
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
