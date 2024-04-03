import './App.css'
import Header from "./Components/Header/Header"
import Inputs from './Components/InputFields/Inputs'
import Result from './Components/Results/Result'
import { useState } from 'react'

function App() {

  const [control,setControl] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

function Triggered(inputs, newValue){
  setControl(element =>{
      return{
          ...element,
          [inputs]: +newValue
      }
  })
}

const Conditions = control.duration >=1;
console.log(control)
  return (
    <>
    <Header />
    
<Inputs Triggereds={Triggered}  controls={control}/>
   

     {Conditions&&<Result input ={control} id="styles"/>}
     {!Conditions && alert("Please input grater than Zero")}
    </>
  )
}


export default App
