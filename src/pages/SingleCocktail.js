import React,{useState,useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const { id } = useParams()
  
  const[loading,setLoading]=useState(false)
  const[cockTail,setCocktail]=useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail(){
      try{
        const response=await fetch(`${url}${id}`);
        const data= await response.json()
        if(data.drinks){
          const{strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,

          }=data.drinks[0]

          const ingredients=[strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,]

            const newCocktail={
              name,image,info,category,instructions,ingredients,glass,
            }
            setCocktail(newCocktail)

        }else{
          setCocktail(null)
        }
        setLoading(false)
      }catch(err){
        console.error(err)
        setLoading(false)
      }
    }
    getCocktail()
    
  }, [])

  if(loading){
    return <Loading/>
  }
  if(!cockTail){
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const{name,image,info,category,instructions,ingredients,glass}=cockTail;
  
  return (
    <div className='section cocktail-section'>
    <Link to='/' className='btn btn-primary'>Back Home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name</span>:{name}
          </p>
          <p>
            <span className="drink-data">category</span>:{category}
          </p>
          <p>
            <span className="drink-data">info</span>:{info}
          </p>
          <p>
            <span className="drink-data">glass</span>:{glass}
          </p>
          <p>
            <span className="drink-data">instructions</span>:{instructions}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleCocktail
