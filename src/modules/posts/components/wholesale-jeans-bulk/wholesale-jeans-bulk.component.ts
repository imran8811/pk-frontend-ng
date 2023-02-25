import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wholesale-jeans-bulk',
  templateUrl: './wholesale-jeans-bulk.component.html',
  styleUrls: ['./wholesale-jeans-bulk.component.scss']
})

export class WholesaleJeansBulkComponent implements OnInit {
  headingText = 'Wholesale Jeans Bulk'
  paraText = 'Best Wholesale Jeans Bulk'
  category = 'men'
  type = 'jeans-pant'

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Wholesale Jeans Bulk')
    this.meta.addTags([
      {name: 'keywords', content: 'Wholesale Jeans Bulk'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
