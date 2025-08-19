import React from 'react'

let add = (a:number , b:number)=>a+b
let subtract = (a:number , b:number)=> a-b
let multiply = (a:number , b: number)=>a*b
let divide = (a:number , b:number)=>a/b
export default function Calculation() {
  return (
    <div>
      <p>{add(10,5)}</p>
      <p>{subtract(10,5)}</p>
      <p>{multiply(10,5)}</p>
      <p>{divide(10,5)}</p>
    </div>
  )
}
