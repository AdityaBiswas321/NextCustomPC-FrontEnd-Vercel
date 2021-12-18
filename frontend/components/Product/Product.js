import { useEffect } from "react";
import Image from "next/image";
import Payments from "../Payments/Payments";
import useQualifyData from "../Qualify/useQualifyData";
import { Card, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = ({
  Price,
  Img,
  Img2,
  ImgB,
  Img3,
  Img4,
  Img5,
  id,
  Des,
  Des2,
  Des3,
  Des4,
  Des5,
  Des6,
  Des7,
  Components,
}) => {
  console.log("ALGORITHM PRICE");
  console.log(Price);
  const controls = useAnimation();
  //can use multiple ref if using array destructuring
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.1 });

  const variants = {
    exit: {
      opacity: 0,
    },
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  };
  console.log("COMPONENTS Products.js");
  console.log(Components);

  const boxVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants2 = {
    hidden2: { x: 200, opacity: 0 },
    visible2: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants3 = {
    hidden3: { x: 200, opacity: 0 },
    visible3: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants4 = {
    hidden4: { x: 200, opacity: 0 },
    visible4: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants5 = {
    hidden5: { x: 200, opacity: 0 },
    visible5: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    console.log("use Effect hook inView:", inView);
    console.log("use Effect hook inView2:", inView2);
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
    if (inView2) {
      controls.start("visible2");
    }
    if (!inView2) {
      controls.start("hidden2");
    }
    if (inView3) {
      controls.start("visible3");
    }
    if (!inView3) {
      controls.start("hidden3");
    }
    if (inView4) {
      controls.start("visible4");
    }
    if (!inView4) {
      controls.start("hidden4");
    }
    if (inView5) {
      controls.start("visible5");
    }
    if (!inView5) {
      controls.start("hidden5");
    }
  }, [controls, inView, inView2, inView3, inView4, inView5]);

  return (
    <div className="lightgrey">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Card className="thumb">
          <Image
            src={ImgB}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />

          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            <Card className="thumbCard ">
              <Image src={Img} width={25} height={25} layout="responsive" />

              <Card.Title>Price:${Price}</Card.Title>
              <Card.Title>{Des}</Card.Title>
              <Card.Body>{Des2}</Card.Body>
            </Card>
          </motion.div>

          <Parallax
            blur={0}
            bgImage="https://i.pinimg.com/736x/d8/0f/aa/d80faaccc549eef16005ec3fa1ea2999.jpg"
            bgImageAlt="the cat"
            strength={200}
          >
            <Col ref={ref} className="thumb ">
              <motion.div
                key="1"
                initial="hidden"
                animate={controls}
                variants={boxVariants}
              >
                <div className="sizing">
                  <Image
                    src={Img2}
                    width={200}
                    height={200}
                    layout="intrinsic"
                  />
                </div>
                <Col className="backgroundColour thumb">
                  <Card.Title className="">{Des3}</Card.Title>

                  <Card.Body className="">{Des4}</Card.Body>
                </Col>
              </motion.div>
            </Col>
          </Parallax>
          <Parallax
            blur={0}
            bgImage="https://cdn2.vectorstock.com/i/1000x1000/82/46/circuit-board-technology-background-vector-13208246.jpg"
            bgImageAlt="the cat"
            strength={200}
          >
            <Col ref={ref2} className="thumb">
              <motion.div
                key="2"
                initial="hidden"
                animate={controls}
                variants={boxVariants2}
              >
                <Image src={Img3} width={25} height={25} layout="responsive" />
                <Col className="backgroundColour thumb">
                  <Card.Title className="">{Des}</Card.Title>
                  <Card.Body className="">{Des5}</Card.Body>
                </Col>
              </motion.div>
            </Col>
          </Parallax>

          <Parallax
            blur={0}
            bgImage="https://cdn.wccftech.com/wp-content/uploads/2018/10/AORUS-GeForce-RTX-2080-Ti-Xtreme_1-740x493.jpg"
            bgImageAlt="the cat"
            strength={200}
          >
            <Col ref={ref3} className="thumb">
              <motion.div
                key="3"
                initial="hidden"
                animate={controls}
                variants={boxVariants3}
              >
                <Image src={Img4} width={25} height={25} layout="responsive" />
                <Col className="backgroundColour thumb">
                  <Card.Title className="">{Des}</Card.Title>
                  <Card.Body className="">{Des6}</Card.Body>
                </Col>
              </motion.div>
            </Col>
          </Parallax>

          <Parallax
            blur={0}
            bgImage="https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7684353/2861_5858e530b782c.jpg"
            bgImageAlt="the cat"
            strength={200}
          >
            <Col ref={ref4} className="thumb">
              <motion.div
                key="3"
                initial="hidden"
                animate={controls}
                variants={boxVariants4}
              >
                <Image src={Img5} width={25} height={25} layout="responsive" />
                <Col className="backgroundColour thumb">
                  <Card.Title className="">{Des}</Card.Title>
                  <Card.Body className="">{Des7}</Card.Body>
                </Col>
              </motion.div>
            </Col>
          </Parallax>

          <motion.div
            key="4"
            initial="hidden"
            animate={controls}
            variants={boxVariants5}
            ref={ref5}
          >
            <Payments Price={Price} img={Img} Components={Components} />
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Product;
