import {useState, useEffect} from 'react';

function useCounter(increment = true) {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{

        //Effect (http call, async counter)

        let counterInterval = setInterval(()=>{
            console.log('test');
            if(increment){
                setCounter((prevCounter)=> prevCounter + 1);
            }
            else{
                setCounter((prevCounter)=> prevCounter - 1);
            }
           
        },1000)

        return () => {
            console.log('Clean up code')
            clearInterval(counterInterval);
        }
       
    }, []);
  
    return counter;
  }

  export default useCounter;