import useCounter from "../store/useCounter";

function CounterValue() {
    const count = useCounter(state => state.count);
    return (
        <div>
            <h2 style={{color:'blue'}}>Counter Value is {count}</h2>
        </div>
    )
}
export default CounterValue;