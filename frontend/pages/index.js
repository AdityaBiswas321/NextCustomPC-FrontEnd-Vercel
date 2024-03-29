import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import LiveChat from "react-livechat";
import { Parallax } from "react-parallax";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Row, Col, Button, Card, Navbar, Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import { useDispatch } from "react-redux";
import axios from "axios";

import { saveLeadForm } from "../actions/computerActions";
import { API_URL } from "../config/index";
import { motion } from "framer-motion";
import { Motion } from "react-motion";

// cont fadeInUp = {
//   inital: {
//     y: 60,
//     opacity: 0
//   }
//   animate: {
//     y: 0,
//     opacity:1
//   }
// }

//Carousel Component
//Next Images

export default function HomeScreen() {
  return (
    <Parallax
      blur={0}
      bgImage="https://static.wikia.nocookie.net/lotr/images/d/d0/Ered_Mithrin_-_LotRO.jpg/revision/latest?cb=20201206050305"
      bgImageAlt="the cat"
      strength={400}
    >
      <Col className="thumbIndex" xl={4} lg={4} style={{ padding: "0" }}>
        <Row className="w">
          <Col id="caro">
            <Carousel showStatus={false} showThumbs={false}>
              <div>
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/TestPC1Unedited.webp"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/WhitePC.jpeg"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/BluePc.jpg"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </div>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-2 mt-2">
              <Card.Body>
                <Card.Text id="bh">
                  Tailor Made Computer <br></br>Designs <br></br>Products,
                  Specification, and Installation <br></br>Exact Quotation
                  <br></br>
                  Gauranteed for 30 days <br></br>
                  <Link href="computer1">
                    <a>
                      <u className="hello">Select Product</u>
                    </a>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="computer">
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card id="gh" type="button" className="btn btn-dark ">
              <Link href="computer1">
                <a>
                  <span> View Product Selector</span>
                </a>
              </Link>
            </Card>
            <Card>
              <Link href="computer1">
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/WhitePC.jpeg"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </Link>
            </Card>
          </Col>

          <Col sm={12} md={12} lg={12} xl={12}>
            <Card id="gh" type="button" className="btn btn-dark ">
              <Link href="computer1">
                <a>
                  <span>View All Products</span>
                </a>
              </Link>
            </Card>
            <Card>
              <Link href="computer1">
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/TestPC1Unedited.webp"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </Link>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card id="gh" type="button" className="btn btn-dark ">
              <Link href="computer1">
                <a>
                  <span>About Us</span>
                </a>
              </Link>
            </Card>
            <Card>
              <Link href="computer1">
                <Image
                  src={
                    "https://secondbucketforcustompc.s3.us-east-2.amazonaws.com/BluePc.jpg"
                  }
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Col>
    </Parallax>
  );
}
