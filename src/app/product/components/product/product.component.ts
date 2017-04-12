import { Component, OnInit, Input, HostListener, HostBinding, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ProductModel } from "app/models/product.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent {

  private backgroundColors = ['Red', 'Green', 'Blue'];

  @Output() onProductRemove: EventEmitter<ProductModel>; 
  @Input() product: ProductModel; 
  @HostBinding('class') classAttr = 'Green';

  constructor() { 
    this.onProductRemove = new EventEmitter();
  }


  buyProduct(){
    if(this.product.countLeft === 0)
        alert('No more products left of this type!')
    else {
        this.product.countLeft--;
    }
  }

  changeBackgroundColor(){
    if(this.classAttr === undefined){
      this.classAttr = this.backgroundColors[0];
    }

    let currentIndex = this.backgroundColors.indexOf(this.classAttr) + 1;
    if(currentIndex >= this.backgroundColors.length)
      currentIndex = 0;
      
    this.classAttr = this.backgroundColors[currentIndex];
  }

  removeProduct() {
    this.onProductRemove.emit(this.product)
  }

}
