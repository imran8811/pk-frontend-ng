import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent implements OnInit {
  dept: string = '';
  category: string = '';
  articleNo: string = '';
  sizes:string[] = [];

  orderForm = this.fb.group({
    'articleNo' : [this.articleNo, Validators.required],
    'dept' : [this.dept, Validators.required],
    'category' : [this.category, Validators.required],
    'fitting' : ['', Validators.required],
    'sizeType' : ['', Validators.required],
    'sizesPerSize' : ['', Validators.required],
    'shippingAddress' : ['', Validators.required],
  })

  constructor(title: Title, private meta: Meta, private fb: FormBuilder, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.forEach(param => {
      this.dept = param['dept'];
      this.category = param['category'];
      this.articleNo = param['articleNo'];
      this.sizes = param['sizes'].split('-');
    })

    // this.title.setTitle('About - Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants')
    // this.meta.addTags([
    //   {name: 'keywords', content: 'Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants'},
    //   {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    // ])
  }

}
