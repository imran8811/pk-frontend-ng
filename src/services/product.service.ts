import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, catchError, tap } from 'rxjs';
import { IProduct } from 'src/models/product.model';

import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_LISTING, GET_PRODUCT_DETAILS, IMAGE_UPLOAD, UPDATE_PRODUCT } from '../endpoints';
import { IProductImages } from 'src/models';

@Injectable({ providedIn: 'root' })

export class ProductService {

  constructor(private http: HttpClient) { }

  getTopProducts = (category:any, type:any) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=8`)
      .pipe()
    return res;
  }

  productImageUpload = (data) => {
    const res = this.http.post<IProductImages>(IMAGE_UPLOAD, data);
    return res;
  }

  addProduct = (data) => {
    const response = this.http.post<IProduct>(ADD_PRODUCT, data).pipe()
    return response;
  }

  getAllProducts = () => {  
    const res = this.http.get<IProduct[]>(GET_PRODUCTS).pipe(res => res);
    return res;
  }

  getProductsListing = (category, type, numberOfRecords) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=${numberOfRecords}`).pipe()
    return res;
  }

  getProductDetails = (article_no) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCT_DETAILS}/${article_no}`).pipe();
    return res;
  }

  deleteProduct = (id) => {
    const res = this.http.delete<IProduct>(DELETE_PRODUCT+'/'+id).pipe();
    return res;
  }

  updateProduct = (data) => {
    const res = this.http.put<IProduct>(UPDATE_PRODUCT+'/'+data.id, data).pipe();
    return res;
  }
}