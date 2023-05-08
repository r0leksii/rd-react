import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount((nextCount) => nextCount - 1)
  }

  return (
    <div className="counter">
      <button className="counter-btn" onClick={handleDecrement} disabled={count <= 0}>
        -
      </button>
      <div className="counter-value">{count}</div>
      <button className="counter-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default Counter
