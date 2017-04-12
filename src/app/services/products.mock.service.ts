import { Injectable } from '@angular/core';
import { ProductModel } from "app/models/product.model";

@Injectable()
export class ProductMockService {

    constructor() {
    }

    getProducts(): Array<ProductModel> {
        let result = new Array<ProductModel>()
        result.push(new ProductModel('laptop', 'Very cool laptop with outstanding performance', 10000, 3));
        result.push(new ProductModel('laptop2', 'Very cool laptop with outstanding performance', 8000, 2));
        result.push(new ProductModel('PC', 'Very cool PC with outstanding performance', 20000, 3));

        return result;
    }
}