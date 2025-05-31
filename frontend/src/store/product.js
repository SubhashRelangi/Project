import { create } from "zustand";

const useProductStore = create((set, get) => ({
    products: [],
    editname: "",
    editPrice: "",
    editImage: "",

    setProducts: (products) => set({ products }),

    setEditName: (name) => set({ editname: name }),
    setEditPrice: (price) => set({ editPrice: price }),
    setEditImage: (image) => set({ editImage: image }),

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." };
        }
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!res.ok) throw new Error("Failed to create product");

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));

            return { success: true, message: "Product Created." };
        } catch (error) {
            console.error("API Error:", error.message);
            return { success: false, message: error.message };
        }
    },

    fetchProducts: async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
            if (!res.ok) throw new Error("Failed to fetch products");

            const data = await res.json();
            set({ products: data.data });
        } catch (error) {
            console.error("Error fetching products:", error.message);
        }
    },

    deleteProduct: async (id) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            set((state) => ({
                products: state.products.filter(product => product._id !== id),
            }));

            return { success: true, message: data.message };
        } catch (error) {
            console.error("API Error:", error.message);
            return { success: false, message: error.message };
        }
    },

    getPostById: (id) => {
        return get().products.find(product => product._id === id);
    },

    editPost: (updatedProduct) => {
        set((state) => ({
            products: state.products.map(product =>
                product._id === updatedProduct.id ? updatedProduct : product
            ),
        }));
    },

    updatedProduct: async (id, updatedProduct) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            set((state) => ({
                products: state.products.map(product =>
                    product._id === id ? data.data : product
                ),
            }));

            return { success: true, message: data.message };
        } catch (error) {
            console.error("API Error:", error.message);
            return { success: false, message: error.message };
        }
    }
}));

export default useProductStore;