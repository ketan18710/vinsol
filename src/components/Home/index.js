import React,{useState,useEffect} from 'react'
import Quiz from '../Quiz/index'
import {Grid, Divider} from '@material-ui/core'
import './style.scss'
function Home() {
  return (
    <div className="home">
      <h1>Hi, let's take a maths quiz</h1>
      <Grid container alignItems="center" justify="center">
        <Grid container xs={12} md={5} alignItems="center" justify="center">
          <Quiz />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container xs={12} md={5} alignItems="center" justify="center">
          <Quiz />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
