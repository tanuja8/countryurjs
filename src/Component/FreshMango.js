import React, { useEffect, useState } from 'react'
// import './Cocktail.css';
export default function FreshMango() {
    const [mango, setMango] = useState([])
    function fetchMango() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(res => res.json())
            .then(data => setMango(data.drinks))
    }
    useEffect(() => {
        fetchMango();
    }, [])
    console.log(mango)
    return (
        <div>
            <h1 className='text-center m-4'>FIND YOUR FAVOURTITE COCKTAIL</h1>
            <div className="form-group">
                <input type="text" className="form-control w-50 " placeholder="Search your coktail..." />

            </div>
            <div className='cocktail_details '>
            {
                mango.map((item) => {
                    return (
                        // <div style={addstyle}>
                        //     <img src={item.strDrinkThumb} style={{width: "100%"}} />
                        //     <h3>{item.strDrink}</h3>
                        //     <h3>{item.idDrink}</h3>
                        // </div>
                        <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top" src={item.strDrinkThumb} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{item.strDrink}</h5>
                            </div>
                        </div>
                
                    )
                })
            }
        </div>
        </div>
    )
}
