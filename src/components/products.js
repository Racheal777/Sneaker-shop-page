import React, { useState } from 'react'

function Products() {
    const[shoe, setShoe] = useState([
        {
            shoe: "Nike",
            price: 350,
            img:   '../images/pic5.jpg'
        },

        {
            shoe: "adidas",
            price: 350,
            img:   '../images/pic2.jpg'
        },

        {
            shoe: "Balanciaga",
            price: 350,
            img:   '../images/pic3.jpg'
        },

        {
            shoe: "Nike",
            price: 350,
            img:   '../images/pic4.jpg'
        },

        {
            shoe: "Nike",
            price: 350,
            img:   '../images/pic9.jpg'
        },

        {
            shoe: "Nike",
            price: 350,
            img:   '../images/pic4.jpg'
        },

        {
            shoe: "Jordan",
            price: 350,
            img:   '../images/pic5.jpg'
        },

        {
            shoe: "All-stars",
            price: 350,
            img:   '../images/pic6.jpg'
        },
    ])


  return (
    <div>
        <div className='shoe-text'>
            <h1>All Products</h1>

        </div>

        <div className="Cards">
            
            {shoe.map((shoes, i) =>(
                <div className="Card-item">
                <img src={shoes.img} alt= 'pic'/>
                <h3>{shoes.shoe} </h3>
                <p>{shoes.price}</p>
                <button>Add to Cart</button>
                </div>
            ))}
            

        </div>
    </div>
  )
}

export default Products