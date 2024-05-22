import React, { useState } from 'react'
import './SearchBar.css';
import searchIcon from '../../images/searchIcon.png'

function SearchBar(props) {
    const [productSearched, setProductSearched] = useState("");

    
    function handleSearchClick() {
        
        console.log(productSearched);
        localStorage.setItem('productRequireName',productSearched.replace(/["]/g, ''));

    }
    return (
        <>
          <div className="searchContainer">
            <form >


                <input type="text"
                    value={productSearched}
                    className='inputSearch'
                    onChange={(inputTyped) => setProductSearched(inputTyped.target.value)}
                    placeholder="O que você procura"
                    id="searchBar" />
                
                    <button type="submit" className="searchIcon" 
                    onClick={() => {handleSearchClick()}}>

                       <img src={searchIcon} className="searchIcon"></img>

                    </button>
                
            </form>
        </div>
        </>
    )
}

export default SearchBar