import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ViewChildren } from '@angular/core';
import { ProductModel } from "app/models/product.model";
import { ProductComponent } from "app/product/components/product/product.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements AfterViewInit {
  
  constructor() { }

  @Input() products: Array<ProductModel>;
  @ViewChildren(ProductComponent) children: Array<ProductComponent>;
  @ViewChild('child') child: ElementRef;
  
  @HostListener('mouseenter') onmouseenter(){
    this.children.forEach(element => {
      element.changeBackgroundColor();
    });
  }

  ngAfterViewInit() {
    console.log('number of children: ' + this.children.length);  
  }

  removeTask(product: ProductModel){
    var index = this.products.indexOf(product, 0);
    if (index > -1) {
        this.products.splice(index, 1);
    }
  }
}
