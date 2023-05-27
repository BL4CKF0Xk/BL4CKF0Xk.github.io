
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './Slider2.css'

const Slider2 = () => {
  return (
    <>
      <h1 className='headingsli'>Projects</h1>
      <div className='ProCard2'>
      <Link to="/projects/Assembly_Data_Types">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Starting On Assembly Language</Card.Title>
            <Card.Text className='cardtext'>
              I'm looking forward to learn reverse enjineering, so I think it is good to learn assembly language before starting on reverse enjineering.
              </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      <Link to="/projects/Way-of-learning">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Way of Learning</Card.Title>
            <Card.Text className='cardtext'>
              You can start to learn without knowing anything about the right way of learning. But, is it effective?
              </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      <Link to="/projects/Way-of-thinking">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Way Of Thinking</Card.Title>
            <Card.Text className='cardtext'>
              Before you start to learn anything you shoud have a good understand about how you can "THINK" about things in a different way.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
        <Link to="/projects/intro-to-htb-academy">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Intro To HTB Academy</Card.Title>
            <Card.Text className='cardtext'>
              Short description about how Penetration testing process works
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </div>
    </>
  )
}

export default Slider2