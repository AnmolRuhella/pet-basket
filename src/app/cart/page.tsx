"use client";
import React from "react";
import { useCartStore } from "../store/useCartStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCartStore();
  const router = useRouter();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNavigation = () => {
    router.push("/category/dogs/labrador");
  };

  return (
    <div className="mx-auto w-full px-4 py-4 flex-1 flex flex-col gap-4">
      <h1 className="w-full text-3xl font-bold p-2 bg-gradient-to-l from-red-900 to-red-300 border border-solid border-red-950">
        🛒 Cart
      </h1>

      {items.length === 0 ? (
        <div
          className="flex-1 flex flex-col items-center justify-center text-center
                        border border-solid border-red-950 rounded p-4"
        >
          <img
            src="/assest/cart1.png"
            alt="Empty Cart"
            className="w-40 h-40 mb-4 opacity-80"
          />
          <h2 className="text-3xl font-bold mb-2">Your cart is empty!</h2>
          <p className="mb-4">
            Looks like you haven&apos;t added any adorable pets yet.
          </p>
          <Button
            onClick={handleNavigation}
            variant="default"
            className="bg-red-900 text-white"
          >
            🐶 Browse Pets
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow flex flex-col sm:flex-row gap-4 items-center p-4 border border-solid border-red-950"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex-1 w-full">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500 capitalize mb-1">
                  Category: {item.category}
                </p>
                <p className="text-gray-700 mb-1">Quantity: {item.quantity}</p>
                <p className="text-pink-600 font-semibold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
              <div className="self-start sm:self-center">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="bg-white rounded shadow p-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total Amount</span>
            <span className="text-xl font-bold text-pink-600">₹{total}</span>
          </div>

          <div className="flex justify-end">
            <Button onClick={clearCart} variant="secondary">
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
