import React, { useState } from 'react'
import './App.css'

function App() {

      const[min, setMin] = useState()
      const[start, setStart] = useState()
      const[max, setMax] = useState()
      const[text, setText] = useState()
      const[count,setCount] = useState()

      const setValues =()=>{
           if(min>start || max<start){
                  setText("😕 Invalid Input 😕")
           }
           else{
                  setCount(start)
                  setText('')
           }
      }

      const increaseCounter = () =>{
            if(count==max){
                  setText("😡Increase Limit reached😡")
            }
            else{
                  setCount(count+1)
                  setText('')
            }
      }

      const decreaseCounter = () =>{
            if(count==min){
                  setText("😡Decrease Limit reached😡")
            }
            else{
                  setCount(count-1)
                  setText('')
            }
      }


  return (
    <>     
        <h1 id="heading">Interactive Counter</h1>
        <div className='parent'>
              <div id="child1">

                    <input 
                    type="tel" 
                    placeholder='enter the minimum value'
                    value={min}
                    onChange={(event)=>{
                        setMin(parseInt(event.target.value))
                        
                    }}
                    />

                    <input 
                    type="tel" 
                    placeholder='enter the starting value'
                    value={start}
                    onChange={(event)=>{
                        setStart(parseInt(event.target.value))
                        
                    }}
                    />

                    <input 
                    type="tel" 
                    placeholder='enter the maximum value'
                    value={max}
                    onChange={(event)=>{
                        setMax(parseInt(event.target.value))
                        
                    }}
                    />

              </div>
                   
              <div id="child2">
                  <button id='btn' onClick={setValues}>Set</button>
              </div>

              <div id="child3">
                    <h1 id='count'>{count}</h1>
                   
              </div>

              <h3>{text}</h3>

              <div id="child4">
                    <img onClick={increaseCounter} src="/increase.png" alt="" height='100'/>
                    <img onClick={()=>{window.location="/"}} src="/reset.png" alt="" width='80'/>
                    <img onClick={decreaseCounter} src="/decrease.png" alt="" height='100'/>
                   
              </div>
        </div>
    </>
  )
}

export default App