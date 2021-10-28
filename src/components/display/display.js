import Number from '../btn/btn';
import Operation from '../btn/btn';
import './display.css'
function display(){

    

    
    return(
        <>
            <div className='display_number' >
                <Number value={1} numero={1}/>
                <Number value={2} numero={2}/>
                <Number value={3} numero={3}/> 
                <Number value={4} numero={4}/>
                <Number value={5} numero={5}/>
            </div>
            
            <div className='display_operation'>
                <Operation value='soma'/>
            </div>
        </>

    )

}

export default display;