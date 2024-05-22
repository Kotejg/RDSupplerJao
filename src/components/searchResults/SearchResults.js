import './SearchResults.css';
import React, { useState } from 'react'

function SearchResults(props) {

    return (
        <>
            <div className="container">
                <img  alt="search Completed with results:" />
                <span className="ProductName" ></span>
                <span className="ResultsNumber">resultsNumber results</span>
            </div>
        </>
    )

}

export default SearchResults; 