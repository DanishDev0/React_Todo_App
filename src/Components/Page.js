import React from 'react'
import NavBar from './NavBar'
import '../App.css'

function Page() {
  return (
    <>
    <div>
           
            <h1>Pages Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    // onClick={
                    //     ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    //     }
                    >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page