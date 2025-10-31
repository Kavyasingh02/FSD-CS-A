import React from 'react'
import Book from './component/Book'
import './App.css'
import Header from './Header'


const App = () => {
   const data=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s',title:"Physics",price:"456/"},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s',title:"Maths",price:"556/"},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s',title:"Chemistry",price:"450/"}
   ]

  return (
    <div>
      <Header></Header>
    <div className='app'>
      {/* <Book></Book>
      <Book></Book>
      <Book></Book> */}
      {
        data.map((b,i)=>(
        <Book key={i} book={b}></Book>
        ))
      }
    </div></div>
  )
}

export default App
