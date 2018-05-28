import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService, private http: HttpClient){}

  cartItems(): CartItem[]{
    return this.cartService.items;
  }

  itemsValue(): number{
    return this.cartService.total();
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeFromCart(item);
  }

  checkOrder(order: Order): Observable<string>{
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id)
  }

  clear(){
    this.cartService.clear();
  }
}
