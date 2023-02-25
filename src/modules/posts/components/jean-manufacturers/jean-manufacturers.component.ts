import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jean-manufacturers',
  templateUrl: './jean-manufacturers.component.html',
  styleUrls: ['./jean-manufacturers.component.scss']
})

export class JeanManufacturersComponent implements OnInit {
  headingText = 'Jean Manufacturers'
  paraText = 'Best Jean Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Jean Manufacturers')
    this.meta.addTags([
      {name: 'keywords', content: 'Jean Manufacturers'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
