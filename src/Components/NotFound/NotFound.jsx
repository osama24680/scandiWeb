import React, { Component } from 'react'
import error from "./404.png"
import style from "./NotFound.module.css"

export default class NotFound extends Component {
    render() {
        return (
            <div className={style.NotImg}>
                <img src={error} alt="" />
            </div>
        )
    }
}
