import { create } from "zustand";
import { Recipe } from "../models/Recipe";
import { Detail } from "../models/Detail";

export interface StoreState {
    recipe: Recipe[]
    recipes: Recipe[]
    selectedRecipes: Recipe[]
    currentPage: number
    fetchRecipes: () => Promise<void>
    fetchRecipeById: (id: string | undefined) => Promise<void>
    deleteSelectedRecipes: () => Promise<void>
    addPage: () => void
    updateSelectedRecipes: (recipes: Recipe[]) => void
}

const MIN_PER_RENDER = 15;

export const useRecipeStore = create<StoreState>((set, getState) => ({
    recipes: [],
    recipe: [],
    selectedRecipes: [],
    currentPage: 1,
    fetchRecipes: async () => {
        try {
            const {currentPage} = getState();
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
            const data = await response.json() as Recipe[];
            set((state) => ({recipes: [...state.recipes, ...data]}));
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    },
    fetchRecipeById: async (id:string | undefined) => {
        try {
            const result = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
            const json = await result.json() as Detail[]
            set({recipe: json})
        } catch (error) {
            console.error('Failed to fetch recipe:', error)
        }
    },
    addPage: () => {
        set((state) => ({currentPage: state.currentPage + 1}));
    },
    updateSelectedRecipes: (recipes) => {
        set({selectedRecipes: recipes});
    },
    deleteSelectedRecipes: async () => {
        const {recipes, selectedRecipes} = getState();
        const filteredRecipes = recipes.filter((recipe) => !selectedRecipes.includes(recipe));
        set({selectedRecipes: []});
        if (filteredRecipes.length < MIN_PER_RENDER) {
            set({recipes: filteredRecipes});
            set((state) => ({currentPage: state.currentPage + 1})); 
            await getState().fetchRecipes(); 
        } else {
            set({recipes: filteredRecipes});
        }
    },
}))
