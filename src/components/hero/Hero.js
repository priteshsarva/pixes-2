import React, { useEffect } from 'react'
import './Hero.css'

const Hero = () => {
    useEffect(() => {
        if (window.innerWidth >= window.innerHeight) {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-7";
            herop2.className = "container col-3";
        } else {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-10";
            herop1.style.textAlign = "center"
            herop1.children[1].style.width = '100%'
            herop2.className = "container col-10";
            console.log();
        }
    }, [])

    document.addEventListener('load', () => {
        if (window.innerWidth >= window.innerHeight) {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-7";
            herop2.className = "container col-3";
        } else {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-10";
            herop1.style.textAlign = "center"
            herop1.children[1].style.width = '100%'
            herop2.className = "container col-10";
            console.log();
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= window.innerHeight) {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-7";
            herop2.className = "container col-3";
        } else {
            let herop1 = document.getElementById('herop1')
            let herop2 = document.getElementById('herop2')
            herop1.className = "container col-10";
            herop1.style.textAlign = "center"
            herop1.children[1].style.width = '100%'
            herop2.className = "container col-10";
            console.log();
        }
    })

    return (
        <>
            <div className="container " id='realhero'>
                
                <div className="row d-flex justify-content-between my-auto  mx-auto" id='hero'>
                    <div className="container col-7 m-0" id='herop1'>
                        <h1 className="text-uppercase">Landing Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href="/">Know more</a>
                    </div>
                    <div className="container col-3 m-0" id='herop2'>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default Hero
