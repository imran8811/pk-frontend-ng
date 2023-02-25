import { IProductImages } from "./productImages.model";
export interface IProduct {
  sizes : string,
  colors : string,
  fitting : string,
  fabric: string,
  fabric_weight: string,
  wash_type : string,
  moq : string,
  price : string,
  article_no : string,
  category : string,
  type : string,
  length : string,
  slug : string,
  product_images : IProductImages[]
}