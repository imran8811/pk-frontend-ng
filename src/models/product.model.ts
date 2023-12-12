import { IProductImages } from "./productImages.model";
export interface IProduct {
  sizes : string,
  color : string,
  fitting : string,
  fabric: string,
  fabricWeight: string,
  wash_type : string,
  moq : string,
  price : string,
  articleNo : string,
  category : string,
  type : string,
  length : string,
  slug : string,
  product_images : IProductImages[],
  data: string[]
}