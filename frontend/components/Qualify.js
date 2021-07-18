import { useState, useEffect } from 'react'
import { ListGroup, Button, Row, Col, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
// import { useDispatch, useSelector } from 'react-redux'
// import { saveLeadForm } from '../actions/computerActions'

const Qualify = ({ Ctype }) => {
//   const dispatch = useDispatch()

//   const computerLead = useSelector((state) => state.computerLeads)
//   const { lead } = computerLead

  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [step4, setStep4] = useState(false)

  const [type, setType] = useState('')
  const [tab, setTab] = useState('')
  const [app, setApp] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [postal, setPostal] = useState('')

  const alertclick = (type) => {
    setStep1(false)
    setStep2(true)
    setType(type)
  }
  const alertclick2 = (tab) => {
    setStep2(false)
    setStep3(true)
    setTab(tab)
  }
  const alertclick3 = (app) => {
    setStep3(false)
    setStep4(true)
    setApp(app)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(type)
    console.log(tab)
    console.log(app)
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(postal)
    console.log(Ctype)

    // dispatch(
    //   saveLeadForm({ type, tab, app, name, email, phone, postal, Ctype })
    // )
  }

//   useEffect(() => {
//     if (lead) {
//       console.log(lead)
//       console.log('from useEffect')
//     }
//   }, [lead])

  return (
    <>
      {step1 ? (
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col className='text-center py-2'>
                <h5>Select usage</h5>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick('Home Office')}
            >
              Home Office
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick('Content Creation')}
            >
              Content Creation
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick('Gaming')}
            >
              Gaming
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step2 ? (
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col className='text-center py-2'>
                <h5>Select Tab Usage</h5>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick2('less than 4 tabs')}
            >
              Few Tabs - less than 4
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick2('between 4-8 tabs')}
            >
              Moderate Tabs - between 4 - 8
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick2('more than 8 tabs')}
            >
              Many Tabs - more than 8
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step3 ? (
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col className='text-center py-2'>
                <h5>Select Application Usage</h5>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick3('2 applications')}
            >
              Couple Applications - ex chrome, word
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick3('3 applications')}
            >
              Few Applications - ex chrome, word, zoom
            </Button>
            <Button
              type='button'
              className='btn-block'
              onClick={() => alertclick3('+4 applications')}
            >
              Many Applications - ex more than 4
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        step4 && (
          <FormContainer>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Name'
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Name'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Phone'
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='postal'>
                <Form.Label>Postal</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Postal'
                  value={postal}
                  required
                  onChange={(e) => setPostal(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type='submit' variant='primary'>
                Continue
              </Button>
            </Form>
          </FormContainer>
        )
      )}
    </>
  )
}

export default Qualify
