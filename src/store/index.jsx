import coldImg from "../assets/imgs/categories/cold.png";
import wokImg from "../assets/imgs/categories/wok.png";
import dessertImg from "../assets/imgs/categories/desert.png";
import pastaImg from "../assets/imgs/categories/pasta.png";
import pizzaImg from "../assets/imgs/categories/pizza.png";
import burgerImg from "../assets/imgs/categories/burger.png";
import { create } from "zustand";
// set Function can update any state into the object of global state
export const useCategories = create((set) => (
    {
        data: [
            { documentId: 1, name: "Cold Drinks", path: "cold", imgUrl: coldImg },
            { documentId: 2, name: "Burgers", path: "burgers", imgUrl: burgerImg },
            { documentId: 3, name: "Pizza", path: "pizza", imgUrl: pizzaImg },
            { documentId: 4, name: "Wok", path: "wok", imgUrl: wokImg },
            { documentId: 5, name: "Desserts", path: "dessert", imgUrl: dessertImg },
            { documentId: 6, name: "Pasta", path: "pasta", imgUrl: pastaImg},
        ],

        active_cat_id: 0,
        // Method
        setActiveId: (activeTab) => (set(() => ({ active_cat_id: activeTab }))),
        resetActiveId: () => (set(() => ({ active_cat_id: 0 })))
    }
))