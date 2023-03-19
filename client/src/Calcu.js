import React, { useState } from 'react'

export default function Calcu() {
    const [count,setCount1]= useState(0);
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount1(count + 1)}>
          Click me
        </button>
      </div>
    )
}
