import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jeans-manufacturers',
  templateUrl: './jeans-manufacturers.component.html',
  styleUrls: ['./jeans-manufacturers.component.scss']
})

export class JeansManufacturersComponent implements OnInit {
  headingText = 'Jeans Manufacturers'
  paraText = 'Best Jeans Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Jeans Manufacturers')
    this.meta.addTags([
      {name: 'keywords', content: 'Jeans Manufacturers'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
