import React,{useState,useEffect} from 'react'
import {TextField, Button} from '@material-ui/core';
import './style.scss'
function Question(props) {
  const {appendQuestion,quesNumber} = props
  const [data, setData] = useState({
    equation : null,
    result : null,
    answer : null,
    score : null
  })
  const counterInit = 20
  const [answer, setAnswer] = useState('')
  const [counter, setCounter] = useState(counterInit);
  const [error, setError] = useState(null)
  const operatorList  = ['+','*','-','/']
  const randomDataPicker = () => {
    const operator = operatorList[Math.floor(Math.random()*operatorList.length)];
    const num1 = Math.floor(Math.random() * (10-1)) + 1;
    const num2 = Math.floor(Math.random() * (10-1)) + 1;
    const equation = num1 + '         ' + operator + '         ' + num2
    setData(
    {
      ...data,
      equation : equation,
      result : `${eval(equation)}`
    })
  }
  
  useEffect(() => {
    if(counter>=0){
      let x = setTimeout(() => {
                setCounter(counter-1)
                clearTimeout(x)
              }, 1000);
    }else{
      evaluate()
    }
  }, [counter])

  
  useEffect(() => {
    randomDataPicker()
    setAnswer('')
    setError(null)
    setCounter(counterInit)
  }, [quesNumber])

  const evaluate = () => {
    const ans = `${eval(answer)}`
    if(answer.trim().length > 0 || counter <= 0){
      let temp  = data
      if(ans === data.result){
        temp.answer = ans
        temp.score = 1
      }else{
        temp.score = 0
      }
      appendQuestion(temp)
    }else{
      setError(true)
    }
  }
  
  return (
      
    data.equation  &&
    <div className="question">
      <div className="timer">
        <h2>{counter}</h2>
      </div>
      <h2>{data.equation}</h2>
      <TextField type="text" error={error} helperText={error ? "Please provide an answer" : null }value={answer} onChange={(e)=>setAnswer(e.target.value)} />
      <Button variant="contained" onClick={()=>evaluate()} color="primary">
        {quesNumber !== 10 ? 'Next' : 'Submit'}
      </Button>
    </div>
  )
}

export default Question