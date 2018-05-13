import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }

  total(): number{
    return this.shoppingCartService.total();
  }
  clear() {
    this.shoppingCartService.clear();
  }
  removeFromCart(item: any){
    this.shoppingCartService.removeFromCart(item);
  }
  addToCart(item:any){
    this.shoppingCartService.addToCart(item);
  }
}
