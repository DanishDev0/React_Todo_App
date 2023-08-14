import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../State/index"

function Slicer() {
    const [amount, setAmmount] = useState("")
    const dispatch =useDispatch();
    const {withdrawMoney,depositeMoney}=bindActionCreators(actionCreators,dispatch)
const handlerAmount=()=>{
depositeMoney(parseInt(amount))

}
  return (
    <>
    <h3>Set Amount</h3>
    <button onClick={()=>{dispatch(actionCreators.withdrawMoney(222))}}>set -222</button>
    <button onClick={()=>{dispatch(actionCreators.depositeMoney(222))}}>set +222</button>
    <input type="number" onChange={(e)=>{setAmmount(e.target.value)}}/>
    <button onClick={()=>{handlerAmount()}}>Set</button>
    </>
    
  )
}

export default Slicer