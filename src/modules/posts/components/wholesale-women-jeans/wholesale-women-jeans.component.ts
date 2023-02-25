import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wholesale-women-jeans',
  templateUrl: './wholesale-women-jeans.component.html',
  styleUrls: ['./wholesale-women-jeans.component.scss']
})

export class WholesaleWomenJeansComponent implements OnInit {
  headingText = 'Wholesale Women Jeans'
  paraText = 'Best Wholesale Women Jeans'
  category = 'men'
  type = 'jeans-pant'

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Wholesale Women Jeans')
    this.meta.addTags([
      {name: 'keywords', content: 'Wholesale Women Jeans'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
