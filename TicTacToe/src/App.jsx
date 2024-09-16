import React, { useState, useEffect  } from 'react';
import './App.css';
import Square from './Component/Square';
import Pattern from './pattern';
function App(){
  const [squers,setSquers]=useState(Array(9).fill(null));
   const [player,setPlayer]=useState('✖️')
   const [result,setResult]=useState({winner:'none'})
   function chooseSquere(index) {
    if (squers[index] !== null || result.winner !== 'none') return;
    setSquers(
        squers.map((val, inx) => {
            if (inx === index) {
                return player;
            }
            return val;
        })
    );

    if(player==='✖️'){
      setPlayer('⭕')
    }
    else{
     setPlayer('✖️')
    }
}
   useEffect(()=>{
      winnerHandle()
      console.log(result)
   },[squers])
   function winnerHandle() {
    for (const currentPattern of Pattern) {
        const firstItem = squers[currentPattern[0]];
        if (firstItem === null) continue;

        const winner = currentPattern.every(index => squers[index] === firstItem);
        if (winner) {
            setResult({ winner: firstItem });
            return;
        }
    }
}
function RestartMatch(){
  setSquers(Array(9).fill(null))
  if(player==='✖️'){
    setPlayer('⭕')
  }
  else{
   setPlayer('✖️')
  }
  setResult({winner:'none'})
}
   return(
    <div className='App'>
      <div className='board'>
        {result.winner !='none'&& <p>congratulation winner : {result.winner} you won</p>}
        <div className='row'>
          <Square val={squers[0]} chooseSquare={()=>chooseSquere(0)}/>
          <Square val={squers[1]} chooseSquare={()=>chooseSquere(1)}/>
          <Square val={squers[2]} chooseSquare={()=>chooseSquere(2)}/>
        </div>
        <div className='row'>
          <Square val={squers[3]}chooseSquare={()=>chooseSquere(3)}/>
          <Square val={squers[4]}chooseSquare={()=>chooseSquere(4)} />
          <Square val={squers[5]}chooseSquare={()=>chooseSquere(5)}/>
        </div>
        <div className='row'>
          <Square val={squers[6]}chooseSquare={()=>chooseSquere(6)}/>
          <Square val={squers[7]}chooseSquare={()=>chooseSquere(7)}/>
          <Square val={squers[8]}chooseSquare={()=>chooseSquere(8)}/>
        </div>
        <div className="buttoncontainer">
          <button onClick={RestartMatch}>Restart</button>
        </div>
      </div>
    </div>
   )
}

export default App;