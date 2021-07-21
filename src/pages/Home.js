import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
      <div className="footer">
        <h5>Copyright @2021</h5>
        <h5>Ramit Sarkar</h5>
      </div>
    </main>
  )
}

export default Home
