/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
// prettier-ignore
//@ts-ignore
import {  singleVenueStyles as S,carouselStyles as C,} from "../../../styles/index.js";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel(params: any) {
  const [number, setNumber] = useState(1);
  const { media } = params;

  function add() {
    return setNumber(number + 1);
  }

  function subtract() {
    return setNumber(number - 1);
  }

  const length = media.length;
  console.log(length);

  return (
    <C.StyledCarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={length}
    >
      <C.StyledSlider>
        {media.map((item: any, index: number) => (
          <C.StyledSlide key={item.url} index={index}>
            <S.SingleVenueImage src={item.url} />
          </C.StyledSlide>
        ))}
      </C.StyledSlider>

      <C.ButtonBox>
        <C.StyleButtonBack onClick={subtract}>
          <i className="fa-solid fa-arrow-left"></i>
        </C.StyleButtonBack>
        <C.SlideNumber>{`${number}/${length}`}</C.SlideNumber>
        <C.StyledButtonNext onClick={add}>
          <i className="fa-solid fa-arrow-right"></i>
        </C.StyledButtonNext>
      </C.ButtonBox>
    </C.StyledCarouselProvider>
  );
}
export default Carousel;
