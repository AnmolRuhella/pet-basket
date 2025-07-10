"use client"
import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-4 right-4 bg-white border shadow rounded p-4 w-64 max-h-[80vh] overflow-auto">
      <h2 className="font-bold mb-2">🛒 Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="text-sm">{item.name} x{item.quantity}</p>
                <p className="text-xs text-gray-500">₹{item.price * item.quantity}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>✖</Button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2 text-right font-semibold">Total: ₹{total}</div>
      <Button onClick={clearCart} className="mt-2 w-full" variant="secondary">Clear Cart</Button>
    </div>
  );
}
