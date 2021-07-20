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
      <Col sm={12} md={6} lg={4} xl={3}>
      <Card class="btn btn-dark">
        <Link class="btn btn-primary" href="computer1">
          <a><span style={{color:"white"}}>Computer1</span></a>
        </Link>
        </Card>
        <Card>
        <Image 
        src={'https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg'}
        width={25}
        height={25}
        layout="responsive"
        />
        </Card>
        
      
      </Col>
    </Row>
      
      
    </>
  )
}
