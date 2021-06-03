import useCounter from '../hooks/use-counter'
function Decrement(props){

    const counter = useCounter(false);
    return (
        <>
        <h2>Decrement component</h2>
        <h2>{counter}</h2>
        </>
    )
}

export default Decrement;