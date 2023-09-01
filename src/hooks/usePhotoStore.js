import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePhotoStore = create(
    persist(
        (set) => ({
            items: [], // Initialize the items array
            // Function to add an object to the array
            addItem: (item) => set((state) => ({
                items: [...state.items, item]
            })),
            // Function to delete an object from the array by id
            deleteItemById: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id)
            })),
            // Function to delete all objects from the array
            clearAll: () => set({ items: [] }),
            updateArray: (newArray) => set({ items: newArray })
        }),
        { name: 'items-array' }  // Name for the persisted state
    )
);

export default usePhotoStore;