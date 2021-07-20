import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Row, Col, Button, Card, } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../config/index'
import { saveLeadForm } from '../actions/computerActions'
import { useDispatch } from 'react-redux'


export default function HomeScreen() {
  const dispatch = useDispatch()
      
  const Testclick = async () => {
    // const { data } = await axios.get(`${API_URL}/api/lead`)
    //     console.log(data)
    dispatch(
      saveLeadForm()
    )
    
    console.log("button worked")
  }
  
  return (
    <>
    <Row>
      <Col>
      <Card>
        <Link href="computer1">
          <a>Computer1</a>
        </Link>
        <Image 
        src={'https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg'}
        width={170}
        height={100}
        />
      </Card>
      </Col>
    </Row>
      
      <Button
          type='button'
          className='btn-block' 
          onClick={() => Testclick()}>
            Test Button
        </Button>
    </>
  )
}
