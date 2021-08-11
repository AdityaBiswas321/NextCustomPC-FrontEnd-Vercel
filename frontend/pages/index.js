import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Row, Col, Button, Card, Navbar } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import axios from "axios";

import { saveLeadForm } from "../actions/computerActions";
import { API_URL } from "../config/index";
import Header from "../components/Header";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const Testclick = async () => {
    // const { data } = await axios.get(`${API_URL}/api/lead`)
    //     console.log(data)
    dispatch(saveLeadForm());

    console.log("button worked");
  };

  return (
    <>
      <Header />
      <Row>
        <Col id="caro" sm={12} md={12} lg={6} xl={6}>
          <Carousel>
            <div>
              <img src="https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card id="text">
            <Card.Body>
              Copywrite PC Description. Office Ready Personal Computer. Free
              Quotation, Gaurantee Pricing 30 days.
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row id="computer">
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card id="gh" type="button" className="btn btn-dark ">
            <Link href="computer1">
              <a>
                <span>Computer1</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Image
              src={
                "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg"
              }
              width={25}
              height={25}
              layout="responsive"
            />
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card id="gh" type="button" className="btn btn-dark ">
            <Link href="computer1">
              <a>
                <span>Computer1</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Image
              src={
                "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg"
              }
              width={25}
              height={25}
              layout="responsive"
            />
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card id="gh" type="button" className="btn btn-dark ">
            <Link href="computer1">
              <a>
                <span>Computer1</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Image
              src={
                "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/playstation.jpg"
              }
              width={25}
              height={25}
              layout="responsive"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
