import {FC} from 'react'
import { Detail } from '../models/Detail'

type Props = {
  recipe: Detail
}

const Details: FC<Props> = ({recipe}) => {
  return (
    <div className="details-container">
      <img className="details-img" src={recipe.image_url} alt="" />
      <div className="content">
        <h1>{recipe.name}</h1>
        <p className="details-description">{recipe.description}</p>
        <p className="details-paired">Good paired with: {recipe.food_pairing.join(', ')}</p>
        <p className="details-tips">Brewers tips: {recipe.brewers_tips}</p>
      </div>
    </div>
  )
}

export default Details