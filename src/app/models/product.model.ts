import { Injectable } from '@angular/core';

@Injectable()
export class ProductModel {

    constructor(private _name :string,
    private _description :string,
    private _price :number,
    private _countLeft :number, ) {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.countLeft = _countLeft;
    }

    name: string;
    description: string;
    price: number;
    countLeft: number
}