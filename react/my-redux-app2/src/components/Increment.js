import useCounter from '../hooks/use-counter'
function Increment(props){

    // const [counter, setCounter] = useState(0);
    // //   var counter = 34;
    // // setTimeout(()=>{
    // //     setCounter(counter + 1);
    // // },1000)


    // //CDM
    // useEffect(()=>{

    //     //Effect (http call, async counter)
    //     let counterInterval = setInterval(()=>{
    //         console.log('test');
    //         setCounter((prevCounter)=> prevCounter + 1);
    //     },1000)

    //     return () => {
    //         console.log('Clean up code')
    //         clearInterval(counterInterval);
    //     }
       
    // }, []);

    // // useEffect(() => {
    // //     effect
    // //     return () => {
    // //         cleanup
    // //     }
    // // }, [input])
  
    // useHttp(url, method, requestOptions)
    const counter = useCounter();
    return (
        <>
        <h2>Increment component</h2>
        <h2>{counter}</h2>
        </>
    )
}

export default Increment;