const baseRoute = 'http://localhost:3000';
// const baseRoute = 'https://www.pkapparel.com/api';

export const ADMIN_LOGIN = `${baseRoute}/admin/login`;
export const ADD_PRODUCT = `${baseRoute}/product/create`;
export const DELETE_PRODUCT = `${baseRoute}/product`;
export const UPDATE_PRODUCT = `${baseRoute}/admin/product`;
export const SEARCH_PRODUCTS = `${baseRoute}/products/search`;
export const IMAGE_UPLOAD = `${baseRoute}/product/image-upload`;
export const GET_PRODUCT_DETAILS = `${baseRoute}/product`;
export const CREATE_ADMIN_USER = `${baseRoute}/admin/create`;
export const ADMIN_LOGOUT = `${baseRoute}/admin/logout`;

//Auth
export const USER_LOGIN = `${baseRoute}/user/login`

export const GET_PRODUCT = `${baseRoute}/product`;
export const GET_PRODUCT_BY_FILTERS = `${baseRoute}/product/GetProductsByFilters`;
export const GET_PRODUCTS_LISTING = `${baseRoute}/product-listing`;
export const GET_ARTICLE_NO = `${baseRoute}/product/article-no`;

//internal routes
export const PRODUCT_DETAILS = '/wholesale-shop/product-details'
export const WHOLESALE_SHOP = '/wholesale-shop'