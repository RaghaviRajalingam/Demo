import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import { AppState } from '../app.state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private readonly store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
   }

  addProduct(name:any, price:any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
        name: name,
        price: price
      }
    });
  }
  GetChildData(data: any){  
    alert(data);  
 }  
  ngOnInit() {
  }

}


