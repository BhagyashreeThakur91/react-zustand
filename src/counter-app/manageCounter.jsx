import useCounter from "../store/useCounter";

function ManageCounter() {
    const incrementCount = useCounter(state=>state.handleIncrementCount); 
    const decrementCount = useCounter(state => state.handleDecrementCount);
    return (
        <div style={{display:'flex', gap: '5px', justifyContent:'center'}}>
        <button 
        style={{
            marginBottom : '20px',
            background: 'black',
            color:'white',
            fontSize: '18px', 
            fontWeight:'bold'
        }}
        onClick={incrementCount}
        >Increment Counter Value</button>
        <button 
        style={{
            marginBottom : '20px',
            background: 'black',
            color:'white',
            fontSize: '18px', 
            fontWeight:'bold'
        }}
        onClick={decrementCount}
        >Decrement Counter Value</button>
        </div>
    )
}
export default ManageCounter;