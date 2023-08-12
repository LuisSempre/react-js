import React, { useState } from "react"

type ButtonProps = {
	add: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({add}: ButtonProps) => {
	return <button onClick={() => add((n) => n + 1)}>Add</button>
}

export default Button
