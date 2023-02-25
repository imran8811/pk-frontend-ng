import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jeans-manufacturing-cost',
  templateUrl: './jeans-manufacturing-cost.component.html',
  styleUrls: ['./jeans-manufacturing-cost.component.scss']
})

export class JeansManufacturingCostComponent implements OnInit {
  headingText = 'Jeans Manufacturing Cost'
  paraText = 'Best Jeans Manufacturing Cost'
  category = 'men'  
  type = 'jeans-pant'   

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Jeans Manufacturing Cost')
    this.meta.addTags([
      {name: 'keywords', content: 'Jeans Manufacturing Cost'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
