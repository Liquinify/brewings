import { useEffect } from 'react'
import { useRecipeStore } from '../stores/store'
import { useNavigate, useParams } from 'react-router-dom'
import Details from '../pages/Details'


const DetailsList = () => {
  const recipe = useRecipeStore(state => state.recipe)
  const fetchRecipeById = useRecipeStore(state => state.fetchRecipeById)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchRecipeById(id)
  }, [id])

  function handleBack() {
    navigate(-1)
  }
  
  return (
    <div>
        <button className="back-btn" onClick={handleBack}>Back</button>
        {recipe.map((recipe) => (
          <Details recipe={recipe} key={recipe.id}/>
        ))}
    </div>
  )
}

export default DetailsList