import "./Footer.css"
import logo from "../../assets/images/watermarked_img_11913277009319731599.png"
import React from 'react'

export default function index() {
    return (
        <footer className='footer'>
            <section className="section-footer">
                <img src={logo} />
                <p>©Sisyphus Academy</p>
            </section>
        </footer>
    )
}