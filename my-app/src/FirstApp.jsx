import PropTypes from 'prop-types';
import { useState} from "react"



const FirstApp = ({ value}) => {
    const [counter, setCounter] = useState (value)

    const handleAdd=() =>{
        setCounter(counter +1 )
    }
    return(
        <>
          <h1> Counter</h1>
          <span> { counter}</span>
          <button onClick={() => handleAdd() } > +1 </button>
        
        </>
    )
}

export default FirstApp

//FirstApp.propTypes ={
//    title: PropTypes.string.isRequired,
//    sum: PropTypes.number.isRequired
//}
//FirstApp.defaultProps = {
//    title: "no hay titulo",
//    sum: 300
//}

