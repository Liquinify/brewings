import { FC } from 'react'
import { useRecipeStore } from '../stores/store'
import { Recipe } from '../models/Recipe'

type Props = {
  recipe: Recipe
}

const RecipeItem: FC<Props> = ({recipe}) => {
  const selectedRecipes = useRecipeStore(state => state.selectedRecipes)

  return (
    <div className="container">
        <div className={selectedRecipes.includes(recipe) ? 'item-selected' : 'item'}>
            <img className="img" src={recipe.image_url} alt="recipe img"/>
            <h1 className="title">{recipe.name}</h1>
            <p className="tagline">{recipe.tagline}</p>
        </div>
    </div>
  )
}

export default RecipeItem