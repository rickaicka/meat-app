class Order{
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentoOption: string,
    public orderItems: OrderItem[] = []
  ){}
}

class OrderItem{
  constructor(public quantity: number, public menuId: string){

  }
}

export {Order, OrderItem}
