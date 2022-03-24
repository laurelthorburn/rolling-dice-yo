import './App.css'
import './RollDice.css'

const Die = ({number, rolling}) => {

    return ( 
        <>
        <i className={`Die--image fas fa-dice-${number} fa-6x ${rolling ? 'jiggle' : ''}`}></i>
        </>
     );
}
 
export default Die;