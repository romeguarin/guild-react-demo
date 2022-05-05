export interface CartItem {
  id: string;
  price: number;
  name: string;
}

export interface CartModel {
  items: CartItem[];
  totalAmount: number;
}

export interface CartAction {
  type: 'Add' | 'Remove';
  payload: CartItem | undefined;
}
