import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bulk-jeans',
  templateUrl: './bulk-jeans.component.html',
  styleUrls: ['./bulk-jeans.component.scss']
})

export class BulkJeansComponent implements OnInit {
  headingText = 'Bulk Jeans'
  paraText = 'Best Bulk Jeans'  
  category = 'men'  
  type = 'jeans-pant'  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Bulk Jeans')
    this.meta.addTags([
      {name: 'keywords', content: 'Bulk Jeans'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
