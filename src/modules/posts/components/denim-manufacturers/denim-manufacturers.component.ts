import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-denim-manufacturers',
  templateUrl: './denim-manufacturers.component.html',
  styleUrls: ['./denim-manufacturers.component.scss']
})

export class DenimManufacturersComponent implements OnInit {
  headingText = 'Denim Manufacturers'
  paraText = 'Best Denim Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Denim Manufacturers')
    this.meta.addTags([
      {name: 'keywords', content: 'Denim Manufacturers'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
