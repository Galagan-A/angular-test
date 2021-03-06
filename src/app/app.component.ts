import { Component } from '@angular/core';
import { ProductMockService } from "app/services/products.mock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    products = new ProductMockService().getProducts();
}
