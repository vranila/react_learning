import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
    //You can pass:string , JSX, numbers, fragments, arrays
}

const Alert = ({ children }: Props) => {
  return (
    <>
         <h1>Alert </h1>
        <div className='alert alert-primary'>{children}</div>
    </>
   )
}

export default Alert