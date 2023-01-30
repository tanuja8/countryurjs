import React, { useEffect, useState } from 'react'

export default function Country() {
    const[country,setCountry]=useState([])
    function fetchCountrydata(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setCountry(data))
    }
    useEffect(() => {
        fetchCountrydata();
    }, [])
    console.log(country)
  return (
    <div>
       {/* <h1 className='text-center m-4'>FIND YOUR COUNTRY</h1>
            <div className="form-group">
                <input type="text" className="form-control w-50 " placeholder="Search Here..." />
            </div>
            
            <div >
            {
                country.map((item) => {
                    return (
                        // <div style={addstyle}>
                        //     <img src={item.strDrinkThumb} style={{width: "100%"}} />
                        //     <h3>{item.strDrink}</h3>
                        //     <h3>{item.idDrink}</h3>
                        // </div>
                        <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top" src={item.flags.svg} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{item.name.official}</h5>
                            </div>
                        </div>
                
                    )
                })
            }
        </div> */}
        </div>
    )
}








// fetch("https://restcountries.com/v3.1/name/united")