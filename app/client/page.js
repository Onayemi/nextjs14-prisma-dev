'use client';
import { useState } from "react"

const ClientPage = () => {
  const [count, setCount] = useState(0)
  console.log("Client components logs");
  return (
    <div className="flex flex-row">
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>Decrease</button>
      <h1 className="text-5xl font-bold mx-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default ClientPage
