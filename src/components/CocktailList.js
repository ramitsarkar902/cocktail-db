import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{loading,cocktails}=useGlobalContext()

  if(loading) return <Loading/>

  if(cocktails.length<1){
    return(
    <h2 className="section-title">No Cocktails Matched the criteria</h2>
    )
  }
  return (
    <div className="section">
    <h2 className="section-title">
      cocktails
    </h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=>{
          return <Cocktail {...item} key={item.id}/>
        })}
      </div>
    </div>
  )
}

export default CocktailList
