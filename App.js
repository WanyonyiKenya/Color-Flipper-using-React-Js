import React from "react";



export default function App() {
  const colors = ['#FFFFFF', '#0000FF', '#FF0000', '#00FF00', '#FFFF00',' #000080 ','#800080', '#00FFFF']
   
  const flips = Math.floor(Math.random () * colors.length)
  console.log(flips)
 
  const newColor = colors[flips]
  console.log(newColor)
 

  const[colorFlip, setColorFlip] = React.useState(newColor)
  console.log(colorFlip)
  
  function handleFlip(){
      setColorFlip(prevFlip => !prevFlip)
  }

  return(
      <div style = { { backgroundColor: `${newColor}` }}>
          <h2>ColorFlips</h2>
          <div>
              <button onClick={handleFlip}>Click me!</button>
          </div>
      </div>
  )

  }