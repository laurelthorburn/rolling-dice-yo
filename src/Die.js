import './App.css'
import './RollDice.css'

const Die = ({number, rolling}) => {

    return ( 
        <div className="Die">
        <i className={`Die--image fas fa-dice-${number} fa-6x ${rolling ? 'wobble' : ''}`}></i>
        </div>
     );
}
 
export default Die;