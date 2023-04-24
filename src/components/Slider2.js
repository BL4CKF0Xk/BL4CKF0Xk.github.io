
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './Slider2.css'

const Slider2 = () => {
  return (
    <>
      <h1 className='headingsli'>Projects</h1>
      <div className='ProCard2' style={{paddingLeft:'20'}}>
        <Link to="/projects/intro-to-htb-academy">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Intro To HTB Academy</Card.Title>
            <Card.Text className='cardtext'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
        <Card.Link href="#">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Penetration Testing Process</Card.Title>
            <Card.Text className='cardtext'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Card.Link>
        <Card.Link href="#">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title className='Protext'>Certification To Follow in Cybersecurity</Card.Title>
            <Card.Text className='cardtext'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Card.Link>
      </div>
    </>
  )
}

export default Slider2