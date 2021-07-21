import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const singleUrl='www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[loading,setLoading]=useState(false)
  const[searchTerm,setSearchTerm]=useState('d')
  const[cocktails,setCocktails]=useState([])
  

  const fetchDrinks=async()=>{
    setLoading(true)
    try{
      const response =await fetch(`${url}${searchTerm}`)
      const data=await response.json()
      const{drinks}=data;
      if(drinks){
        const newCocktails=drinks.map((item)=>{
          const{idDrink,strDrink,strAlcoholic,strGlass,strDrinkThumb}=item;

          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass,
          }
        })
        setCocktails(newCocktails)

      }else{
        setCocktails([])
      }
      setLoading(false)

    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  

  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])

  


  return <AppContext.Provider value={{

  loading,
  cocktails,
  setSearchTerm,
  

  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }