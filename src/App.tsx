import React, { useState } from "react"
import Button from "./Button"

type User = {
	name: string;
	pro: string
}

function user() {
	return {
		name: "Luis",
		pro: "Dev"
	}
}

function App() {
const [data, setData] = React.useState<null | User>(null)
const [total, setTotal] = React.useState(0)

React.useEffect(() => {
	setTimeout(() => {
		setData(user())
	}, 1000)
}, [])
  return (
	<div>
		<div>
			<p>Total: {total}</p>
			<Button add={setTotal} />
		</div>
   <div>{data !== null && <div>{data.name}: {data.pro}</div>}</div>
	 </div>
  )
}

export default App
