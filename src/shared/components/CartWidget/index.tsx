"use client";
import { useCartStore } from "@/app/store/useCartStore";
import { Button } from "@/components/ui/button";

export default function CartWidget() {
  const items = useCartStore(state => state.items);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="relative bg-pink-500 hover:bg-pink-600 text-white">
        Cart
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </Button>
    </div>
  );
}


//testing 