import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"


export default class Navbar extends Component {
    ActiveElement = (e) => {
        // console.log("osama")
        // let list=Array.from( document.querySelectorAll(".elements p"))
        // console.log(list)
        // for (let i = 0; i < list.length; i++) {
        //     list[i].addEventListener("click", function (e) {
        //         e.preventDefault()
        //         console.log(e.target)
        //         for (let j = 0; j < list.length; j++) {
        //             list[j].classList.remove("active")
        //         }

        //         list[i].classList.add("active")
        //     })
        // }
    }
    mobileNav = () => {
        let menu = document.querySelector(".menu_bar i")
        let navbar = document.getElementsByTagName("nav")

        menu.addEventListener("click", () => {
            menu.classList.toggle("fa-circle-xmark")
            navbar.classList.toggle("active")
        })

    }

    componentDidMount() {
        this.ActiveElement()
    }
    render() {

        return (
            <div className={`${style.header}`} >

                <nav className="container">
                    <div className={`${style.elements} elements`}>
                        <p className={style.active}> <Link to="Women">women</Link></p>
                        <p> <Link to="Men">men</Link></p>
                        <p> <Link to="Kids">kids</Link></p>
                    </div>
                    <div className={style.logoIcons}>
                        <i className="fa-brands fa-drupal" />
                    </div>
                    <div className={style.checkout}>
                        <p>$ <i className="fa-solid fa-chevron-down" /></p>
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </div>

                </nav>
                <div className={`${style.menu_bar} menu_bar`}>
                    <i className="fa-solid fa-bars" />
                </div>
            </div>
        )
    }
}
