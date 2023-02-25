import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jeans-pants-manufacturers',
  templateUrl: './jeans-pants-manufacturers.component.html',
  styleUrls: ['./jeans-pants-manufacturers.component.scss']
})

export class JeansPantsManufacturersComponent implements OnInit {
  headingText = 'Jeans Pants Manufacturers'
  paraText = 'Best Jeans Pants Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Jeans Pants Manufacturers')
    this.meta.addTags([
      {name: 'keywords', content: 'Jeans Pants Manufacturers'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
