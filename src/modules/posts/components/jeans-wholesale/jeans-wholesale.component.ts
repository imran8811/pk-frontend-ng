import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jeans-wholesale',
  templateUrl: './jeans-wholesale.component.html',
  styleUrls: ['./jeans-wholesale.component.scss']
})

export class JeansWholesaleComponent implements OnInit {
  headingText = 'Jeans Wholesale'
  paraText = 'Best Jeans Wholesale'
  category = 'men'
  type = 'jeans-pant'

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Jeans Wholesale')
    this.meta.addTags([
      {name: 'keywords', content: 'Jeans Wholesale'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
