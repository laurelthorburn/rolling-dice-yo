import './App.css'
const Die = ({number}) => {
    return ( 
        <>
        <i className={`Die--image fas fa-dice-${number} fa-6x`}></i>
        </>
     );
}
 
export default Die;