import './App.css'
import React, {useEffect} from 'react'

const Die = ({number}) => {

    useEffect(() => {
        const timer = setTimeout(() => document.querySelector('.Die--image').classList.add('jiggle'), 1000);
        clearTimeout(timer);
      }, [])

    return ( 
        <>
        <i className={`Die--image fas fa-dice-${number} fa-6x`}></i>
        </>
     );
}
 
export default Die;