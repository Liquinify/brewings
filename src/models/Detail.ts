import { Recipe } from "./Recipe";

export interface Detail extends Recipe {
    description: string,
    food_pairing: string[],
    brewers_tips: string,
}