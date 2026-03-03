import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
    //You can pass:string , JSX, numbers, fragments, arrays
    onClick : () => void;
}

const Button = ({children , onClick} : Props) => {
  return (
    <>
        <h1>Button</h1>
        <button className="btn btn-primary" onClick={onClick}>{children}</button>
 
    </>
   )
}

export default Button