import create from "zustand";

export interface Product {
  count: number;
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductStore {
  list: Product[];
  add: (newProduct: Product) => void;
  remove: (productId: number) => void;
  getTotalCount: () => number;
  getTotalPrice: () => number;
  clearList: () => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  list: [],
  add: (newProduct) => {
    set((state) => {
      const existingProduct = state.list.find(
        (product) => product.id === newProduct.id
      );
      if (existingProduct) {
        return {
          list: state.list.map((product) =>
            product.id === newProduct.id
              ? { ...product, count: product.count + 1 }
              : product
          ),
        };
      } else {
        return { list: [...state.list, newProduct] };
      }
    });
  },
  remove: (productId) => {
    set((state) => ({
      list: state.list
        .map((product) => {
          if (product.id === productId) {
            const newCount = product.count - 1;
            if (newCount === 0) {
              return null;
            } else {
              return { ...product, count: newCount };
            }
          }
          return product;
        })
        .filter((product) => product !== null),
    }));
  },
  getTotalCount: () => {
    return get().list.reduce((total, product) => total + product.count, 0);
  },
  getTotalPrice: () => {
    return get().list.reduce(
      (total, product) => total + product.count * product.price,
      0
    );
  },
  clearList: () => {
    set({ list: [] });
  },
}));
