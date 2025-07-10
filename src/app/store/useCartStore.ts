import { create } from 'zustand';
import { Pet } from '@/shared/data/mockdata.constant';

type CartItem = Pet & { quantity: number };

interface CartState {
  items: CartItem[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (pet) =>
    set((state) => {
      const exists = state.items.find(item => item.id === pet.id);
      if (exists) {
        return {
          items: state.items.map(item =>
            item.id === pet.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return { items: [...state.items, { ...pet, quantity: 1 }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== id)
    })),
  clearCart: () => set({ items: [] }),
}));
