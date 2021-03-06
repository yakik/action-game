import React, { useState, useEffect } from 'react';
import './App.css';


export function App() {
  const [gameState, setGameState] = useState({ seconds:0, score: 0, playerLocation: { row: 4, col: 5 } });

  
  const addOneSecondToState=(prevGameState)=>{
    let newGameState = { ...prevGameState }
    newGameState.seconds+=1
    return newGameState
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(addOneSecondToState)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleKeydown = (event) => {
    event.preventDefault()
    let newGameState = { ...gameState }
    if (event.key === 'i') {
      newGameState.playerLocation = { row: newGameState.playerLocation.row - 1, col: newGameState.playerLocation.col }
    }
    if (event.key === 'm') {
      newGameState.playerLocation = { row: newGameState.playerLocation.row + 1, col: newGameState.playerLocation.col }
    }
    if (event.key === 'l') {
      newGameState.playerLocation = { row: newGameState.playerLocation.row, col: newGameState.playerLocation.col + 1 }
    }
    if (event.key === 'j') {
      newGameState.playerLocation = { row: newGameState.playerLocation.row, col: newGameState.playerLocation.col - 1 }
    }
    if (newGameState.playerLocation.row === 3 && newGameState.playerLocation.col === 3) {
      newGameState.score += 10
    }
    setGameState(newGameState)
  }

  let a = []
  for (let row = 0; row < 8; row++)
    for (let col = 0; col < 10; col++) {
      if (row === gameState.playerLocation.row && col === gameState.playerLocation.col) {
        a.push(<div className="player" key={"row:" + row + " col:" + col}>{row + "," + col}</div>)
      } else {
        a.push(<div className="empty" key={"row:" + row + " col:" + col}>{row + "," + col}</div>)
      }
    }


  return (
    <div>
      <p>{"Score: " + gameState.score + " Time: " + gameState.seconds + " seconds"} </p>
      <div className="grid-container" tabIndex="0" onKeyDown={handleKeydown}>
        {a}
      </div>
    </div>
  )

}
