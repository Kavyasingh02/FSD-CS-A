import React from 'react'
import './Book.css'
import { useState } from 'react'
//rafce
const Book = ({book}) => {
    const [count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0){
          setCount(count-1);
        }
    }
    function handleAddtoCart(){
        alert(`${book.title} added successfully`)
    }
  return (
    <div className='card'>
       {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s" alt="book image" width={200} height={200} />  */}
       <img src={book.image} alt="" width={200} height={200} />
       <h3>Title: {book.title}</h3>
       <h4>Price:₹{book.price}</h4>

       <button  onClick={decrement} style={{width:"20px",height:"20px"}}>-</button>
        <span style={{fontSize:'18px'}}>{count}</span>
        <button onClick={increment} style={{width:"20px",height:"20px"}}>+</button>
        <br />



       <button className='cart'   onClick={handleAddtoCart}>Add to Cart</button>
    </div>
  )
}

export default Book;
