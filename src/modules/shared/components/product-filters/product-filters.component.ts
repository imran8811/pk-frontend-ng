import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductService } from 'src/services';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Output() productFilters = new EventEmitter<string>();
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }
  defaultFilters = {
    dept: {
      'men' : true,
      'women' : false,
      'boys': false,
      'girls': false,
    },
    category: {
      'jeans-pant' : true,
      'chino-pant' : false,
      'cargo-trouser' : false,
      'cargo-short' : false,
    },
    fitting: {
      'slim' : true,
      'straight' : true,
      'skinny': true,
      'ankle': true
    },
    color: {
      'sky-blue' : true,
      'mid-blue': true,
      'navy-blue': true,
      'black': true
    },
    washType: {
      'destroyed' : true,
      'ripped' : true
    }
  }

  ngOnInit(): void {}

  setFiltersData = (category, type) => {
    // console.log(category, type);
    switch(category){
      case 'dept':
        Object.keys(this.defaultFilters[category]).forEach(v => this.defaultFilters[category][v] = false);
        this.defaultFilters[category][type] = true;
        break;
      case 'category':
        Object.keys(this.defaultFilters[category]).forEach(v => this.defaultFilters[category][v] = false);
        this.defaultFilters[category][type] = true;
        break;  
      case 'fitting':
        this.defaultFilters[category][type] === true? this.defaultFilters[category][type] = false : this.defaultFilters[category][type] = true;
        break;
      case 'color':
        this.defaultFilters[category][type] === true? this.defaultFilters[category][type] = false : this.defaultFilters[category][type] = true;
        break;
      case 'washType':
        this.defaultFilters[category][type] === true? this.defaultFilters[category][type] = false : this.defaultFilters[category][type] = true;
        break;
      default:
        this.defaultFilters[category][type] = true;
    }
    this.productFilters.emit(JSON.stringify(this.defaultFilters));
  }
}
