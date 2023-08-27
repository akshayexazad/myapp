import {useState} from 'react';
import './style.css';


const dec =()=>{

}


function Ecounter(){
      const [count,setcount] = useState(0);

      const inc =()=>  setcount(count+1);

      const dec =()=>  setcount(count-1);
      

        return(
        <>
        <div className='container'>
        <h1 className='number'>{count}</h1>
        </div>
       <section className='btn-container'>
        <button onClick={inc} className='increment'>+</button>
        <button onClick={dec} className='decrement'>-</button>

       </section>

        </>

     )
    }
    ;
    export default Ecounter;