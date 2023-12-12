import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, catchError, tap, filter } from 'rxjs';
import { IProduct } from 'src/models/product.model';
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { environment } from '../environments/environment.prod';
import * as AWS from 'aws-sdk';

import { 
  ADD_PRODUCT, 
  DELETE_PRODUCT, 
  GET_PRODUCT, 
  GET_PRODUCTS_LISTING, 
  GET_PRODUCT_DETAILS, 
  UPDATE_PRODUCT,
  GET_ARTICLE_NO,
  GET_PRODUCT_BY_FILTERS
} from '../api-endpoints';
import { IProductImages } from 'src/models';

@Injectable({ providedIn: 'root' })

export class ProductService {
  S3Client = new S3Client({
    region : environment.s3Config.region,
    credentials: {
      accessKeyId : environment.s3Config.accessKey,
      secretAccessKey : environment.s3Config.secretAccessKey,
    }
  });

  S3 = new AWS.S3({
    region : environment.s3Config.region,
    credentials: {
      accessKeyId : environment.s3Config.accessKey,
      secretAccessKey : environment.s3Config.secretAccessKey,
    }
  });
  singleSignedURL = '';

  constructor(private http: HttpClient) { }

  getTopProducts = (category:any, type:any) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=8`).pipe()
    return res;
  }

  generateUploadUrl = async (articleNo, productDept, productCategory, imgType) => {
    const imgName = `${productDept}/${productCategory}/${articleNo}/${imgType}.jpg`;
    const command = new PutObjectCommand({
      Bucket : environment.s3Config.bucket,
      Key : imgName,
      ContentType: 'image/jpg'
    })
    const uploadURL = await this.S3Client.send(command);
    return uploadURL;
  }

  productS3ImageUpload = (uploadUrl, images) => {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    const res = this.http.put<IProductImages>(uploadUrl, images);
    return res;
  }

  addProduct = (data) => {
    const res = this.http.post<IProduct>(ADD_PRODUCT, data).pipe()
    return res;
  }

  getProductByDeptCategory = (dept:string, category:string) => {  
    const getProductDetails = this.http.get<IProduct[]>(`${GET_PRODUCT}/${dept}/${category}`).pipe(res => res);
    return getProductDetails;
    // const productImageDetails:IProduct[] = [];
    // getProductDetails.subscribe((products) => {
    //   products.forEach((product, index) => {
    //     const params = {
    //       Bucket: environment.s3Config.bucket,
    //       Key : `${dept}/${category}/${product.articleNo}/front-img`,
    //       Expires: 60
    //     }
    //     let params2 = {
    //       Bucket: environment.s3Config.bucket,
    //       Delimiter: '/',
    //       Prefix: `${dept}/${category}/${product.articleNo}/`
    //     }
    //     try {
    //       this.singleSignedURL = this.S3.getSignedUrl('getObject', params);
    //       this.S3.listObjectsV2(params2, (err, data) => {
    //         const newProducts = {...product, "images" :  data.Contents};
    //         productImageDetails.push(newProducts);
    //       })
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   });
    // })
    // return productImageDetails;
  }

  getProductsListing = (category, type, numberOfRecords) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=${numberOfRecords}`).pipe()
    return res;
  }

  getProductDetails = (productDept, productCategory, articleNo) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCT_DETAILS}/${productDept}/${productCategory}/${articleNo}`).pipe();
    return res;
  }

  deleteProduct = (dept, category, articleNo) => {
    const res = this.http.delete<IProduct>(DELETE_PRODUCT+'/'+ dept +'/' + category + '/' +articleNo).pipe();
    return res;
  }

  updateProduct = (data) => {
    const res = this.http.put<IProduct>(UPDATE_PRODUCT+'/'+data.id, data).pipe();
    return res;
  }

  getArticleNo = () => {
    const res = this.http.get<any>(GET_ARTICLE_NO).pipe(res => res);
    return res;
  }

  getProductsByFilters = (filters) => {
    const dept = Object.keys(filters.dept).filter(item => filters.dept[item] === true);
    const category = Object.keys(filters.category).filter(item => filters.category[item] === true);
    const fitting = Object.keys(filters.fitting).filter(item => filters.fitting[item] === true);
    const color = Object.keys(filters.color).filter(item => filters.color[item] === true);
    const washType = Object.keys(filters.washType).filter(item => filters.washType[item] === true);
    const data = {
      dept,
      category, 
      fitting, 
      color,
      washType
    }
    const res = this.http.post<any>(GET_PRODUCT_BY_FILTERS, data).pipe();
    return res;
  }
}