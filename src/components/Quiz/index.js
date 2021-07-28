import React,{useState,useEffect} from 'react'
import {Button} from '@material-ui/core';
import './style.scss'
import Question from './Question'
import Result from './Result'
function Quiz(props) {
  const [questions, setQuestions] = useState([])
  const [triggers, setTriggers] = useState({
    start : false,
    result : false
  })
  const appendQuestion = (ques) => {
    if(questions.length <9){
      setQuestions([...questions,ques])
    }else{
      setQuestions([...questions,ques])
      setTriggers({...triggers,start : false, result : true})
    }
  }
  return (
    <div className="Quiz">
      {
        !triggers.start && !triggers.result &&
        <Button variant="contained" className="StartBtn" onClick={()=>{setTriggers({...triggers,start : true, result : false})}} color="primary">
          Start
        </Button>
      }
      {
        triggers.start && !triggers.result &&
        <Question appendQuestion={(ques)=>appendQuestion(ques)} quesNumber={questions.length}/>
      }
      {
        !triggers.start && triggers.result &&
        <Result questions={questions}/>
      }


    </div>
  )
}

export default Quiz
