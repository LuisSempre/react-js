import React, { useState } from "react"
import Button from "./Button"

function App() {
const [total, setTotal ] = React.useState(0)

function incrementar() {
		setTotal((total) => total +1)
	}

  return (
      <div className="text-purple-500 flex flex-col h-screen w-full justify-center items-center bg-black font-bold">
			<p>Total: {total}</p>
			<button onClick={incrementar} className="px-4 rounded-full bg-purple-500 text-white">Incrementar</button>
			<Button />
    </div>
  )
}

export default App
