import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext()
  const searchValue=React.useRef('')

  useEffect(()=>{
    searchValue.current.focus()
  },[])

  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  return (
    <div className="section search">
     <form className="search-form" onSubmit={handleSubmit} >
       <div className="form-control">
         <label htmlFor="name">search your favourite cocktail</label>
         <input type="text" placeholder="lick your lips :>" ref={searchValue}  onChange={searchCocktail}/>
       </div>
     </form>
    </div>
  )
}

export default SearchForm
