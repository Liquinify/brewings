import { Recipe } from "./Recipe";

export type Detail = Recipe & {
  description: string;
  food_pairing: string[];
  brewers_tips: string;
  abv: string;
  first_brewed: string;
};
