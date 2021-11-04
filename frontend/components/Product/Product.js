import { useEffect } from "react";
import Image from "next/image";
import Payments from "../Payments/Payments";
import useQualifyData from "../Qualify/useQualifyData";
import { Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = ({
  Img,
  Img2,
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
}) => {
  const {
    type,
    tab,
    app,
    name,
    email,
    phone,
    postal,
    Ctype,
    alertclick,
    alertclick2,
    alertclick3,
    alertclick4,
    setEmail,
    setName,
    setPhone,
    setAddress,
    setCity,
    setProvince,
    setPostal,
    submitHandler,
    stripe,
  } = useQualifyData();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

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

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants2 = {
    hidden2: { scale: 0 },
    visible2: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants3 = {
    hidden3: { scale: 0 },
    visible3: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const boxVariants4 = {
    hidden4: { scale: 0 },
    visible4: {
      scale: 1,
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
  }, [controls, inView, inView2, inView3, inView4]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          <Card className="thumb">
            <Image src={Img} width={25} height={25} layout="responsive" />

            <Card.Title>{Des}</Card.Title>
            <Card.Body>{Des2}</Card.Body>
          </Card>
        </motion.div>

        <motion.div
          key="1"
          initial="hidden"
          animate={controls}
          variants={boxVariants}
        >
          <Card ref={ref} className="thumb">
            <Image src={Img2} width={25} height={25} layout="responsive" />

            <Card.Title>{Des3}</Card.Title>
            <Card.Body>{Des4}</Card.Body>
          </Card>
        </motion.div>

        <motion.div
          key="2"
          initial="hidden"
          animate={controls}
          variants={boxVariants2}
        >
          <Card ref={ref2} className="thumb">
            <Image src={Img3} width={25} height={25} layout="responsive" />

            <Card.Title>{Des}</Card.Title>
            <Card.Body>{Des5}</Card.Body>
          </Card>
        </motion.div>

        <motion.div
          key="3"
          initial="hidden"
          animate={controls}
          variants={boxVariants3}
        >
          <Card ref={ref3} className="thumb">
            <Image src={Img4} width={25} height={25} layout="responsive" />

            <Card.Title>{Des}</Card.Title>
            <Card.Body>{Des6}</Card.Body>
          </Card>
        </motion.div>

        <motion.div
          key="3"
          initial="hidden"
          animate={controls}
          variants={boxVariants4}
        >
          <Card ref={ref4} className="thumb">
            <Image src={Img5} width={25} height={25} layout="responsive" />

            <Card.Title>{Des}</Card.Title>
            <Card.Body>{Des7}</Card.Body>
          </Card>
        </motion.div>

        <Payments
          setEmail={setEmail}
          setName={setName}
          setPostal={setPostal}
          setAddress={setAddress}
          setCity={setCity}
          setProvince={setProvince}
        />
      </Card>
    </motion.div>
  );
};

export default Product;
