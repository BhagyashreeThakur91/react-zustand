import CounterValue from "./counter-app/counterValue"
import ManageCounter from "./counter-app/manageCounter"
import Products from "./products"

function App() {
  return (
    <div>
      <h1>React with Zustand</h1>
      <ManageCounter/>
      <CounterValue/>
      <Products/>
    </div>
  )
}

export default App
