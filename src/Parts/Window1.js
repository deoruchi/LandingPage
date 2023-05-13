import { useEffect, useState } from "react";
import HeroBaanner from "./HeroBaanner";
import Creator from "./Creator";
import Intro from "./Intro";
import Creator2 from "./Creator2";
import Footer from "./Footer";
import Images from "./Images";
//exproting the images

import imgd1 from "../images/desktop/image-deep-earth.jpg";
import imgd2 from "../images/desktop/image-night-arcade.jpg";
import imgd3 from "../images/desktop/image-soccer-team.jpg";
import imgd4 from "../images/desktop/image-grid.jpg";
import imgd5 from "../images/desktop/image-from-above.jpg";
import imgd6 from "../images/desktop/image-pocket-borealis.jpg";
import imgd7 from "../images/desktop/image-curiosity.jpg";
import imgd8 from "../images/desktop/image-fisheye.jpg";

import imgm1 from "../images/mobile/image-deep-earth.jpg";
import imgm2 from "../images/mobile/image-night-arcade.jpg";
import imgm3 from "../images/mobile/image-soccer-team.jpg";
import imgm4 from "../images/mobile/image-grid.jpg";
import imgm5 from "../images/mobile/image-from-above.jpg";
import imgm6 from "../images/mobile/image-pocket-borealis.jpg";
import imgm7 from "../images/mobile/image-curiosity.jpg";
import imgm8 from "../images/mobile/image-fisheye.jpg";

export default function Window1(props) {
  const [windowsize, setWindowsize] = useState(getSize());
  useEffect(() => {
    function handlerFunction() {
      setWindowsize(getSize());
    }

    window.addEventListener("resize", handlerFunction);

    return () => {
      window.removeEventListener("resize", handlerFunction);
    };
  }, []);

  function getSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  //images data and their name

  const imgdata = [
    {
      imgd: imgd1,
      imgm: imgm1,
      name: "deep earth",
    },
    {
      imgd: imgd2,
      imgm: imgm2,
      name: "Night Arcade",
    },
    {
      imgd: imgd3,
      imgm: imgm3,
      name: "soccer team vr",
    },
    {
      imgd: imgd4,
      imgm: imgm4,
      name: "the grid",
    },
    {
      imgd: imgd5,
      imgm: imgm5,
      name: "from up above vr",
    },
    {
      imgd: imgd6,
      imgm: imgm6,
      name: "pocket borealis",
    },
    {
      imgd: imgd7,
      imgm: imgm7,
      name: "the curiosity",
    },
    {
      imgd: imgd8,
      imgm: imgm8,
      name: "make it fisheye",
    },
  ];

  console.log(windowsize);
  return (
    <>
      <HeroBaanner
        windowsize={windowsize.innerWidth}
        changes={props.func}
      ></HeroBaanner>
      <Intro />
      {windowsize.innerWidth > 768 ? (
        <Creator data={imgdata} />
      ) : (
        <Creator2 data={imgdata}></Creator2>
      )}
      <Footer />
    </>
  );
}
