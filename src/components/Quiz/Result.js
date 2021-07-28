import React,{useState,useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineContent,
//   TimelineOppositeContent,
//   TimelineDot,
// } from '@material-ui/lab';
// import {Paper,Typography } from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import './style.scss'
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));
function Result(props) {
  const {questions} = props
  console.table(questions)
  const classes = useStyles();
  const totalScore = () => {
    let total = 0
    questions && questions.length && questions.map((question,index)=>(
      total = total + question.score
    ))
    return total
  }
  
  return (
    <div className="result">
      <h2 className="totalScore">
        Total Score   :      {totalScore()}/10
      </h2>
      <Timeline align="alternate">
        {
          questions && questions.length && questions.map((question,index)=>(
            <TimelineItem>
              <TimelineOppositeContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Question : {question.equation}
                  </Typography>
                </Paper>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={question.score === 1 ? "primary" : "secondary"} />
                {(index+1) != questions.length && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h3">
                    Correct Answer : {question.result}
                  </Typography>
                  <Typography variant="h6" component="h3">
                    Your Answer : {question.answer}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}

export default Result
