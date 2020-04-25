import React, { useState, useEffect } from 'react';
import './App.css';


export function Start() {
  const [playerLocation, setPlayerLocation] = useState({row:4,col:5});

  const handlekeydown=(event)=>{
    event.preventDefault()
    if (event.key==='i'){
      setPlayerLocation({row:playerLocation.row-1,col:playerLocation.col})
    }
    if (event.key==='m'){
      setPlayerLocation({row:playerLocation.row+1,col:playerLocation.col})
    }
    if (event.key==='l'){
      setPlayerLocation({row:playerLocation.row,col:playerLocation.col+1})
    }
    if (event.key==='j'){
      setPlayerLocation({row:playerLocation.row,col:playerLocation.col-1})
    }
  }

  let a=[]
  for (let row=0;row<8;row++)
    for (let col=0;col<10;col++){
      if (row===playerLocation.row && col===playerLocation.col){
        a.push(<div className="player" key={"row:"+row+" col:"+col}>{row+","+col}</div>)
      } else {
        a.push(<div className="empty" key={"row:"+row+" col:"+col}>{row+","+col}</div>)
      }
    }
   
    return (
      <div className="grid-container" tabIndex="0"  onKeyDown={handlekeydown}>
       {a}
      </div>
    )
 
}
