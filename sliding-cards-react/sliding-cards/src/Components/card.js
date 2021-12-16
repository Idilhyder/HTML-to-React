
import { useState } from 'react'
import '../styles/styles.css'


const Card = (props) => {

    const [isActive, setActive] = useState(false)
    const { title, image } = props.items
    

    const handleActive = () => {
      setActive(!isActive)
    }
  
    return (
    <div 
        className= {`panel ${isActive ? "active" : ""}`}
        style = {{backgroundImage:`url(${image})`}}
        onClick = {() => handleActive()}
        >
        <h2
        className = {`''${isActive ? "active" : ""}`} 
        >{title}</h2>
    </div>
    )
}

export default Card