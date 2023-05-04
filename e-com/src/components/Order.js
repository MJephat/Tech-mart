import React from "react"
import { order } from "./data"
// import "./slider.css"

export const Order = () => {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItems'>
          {order.map((items) => (
            <div className='box flexCenter' key={items.id}>
              <div className='num'>
                <h1>{items.id}</h1>
              </div>
              <div className='text'>
                <h3>{items.title}</h3>
                <p>{items.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}