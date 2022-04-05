import React, { Component } from 'react'
// import style from "./Women.module.css"
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"


export default class Men extends Component {
    render() {
        return (
            <div className="productPage">
                <h1>Category Name</h1>


                <div className="allProducts">
                    <div >
                        <img src={img1} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                    <div>
                        <img src={img6} alt="" />
                        <h2>Apollo Running Short</h2>
                        <p>50$</p>
                    </div>
                </div>

            </div>
        )
    }
}
