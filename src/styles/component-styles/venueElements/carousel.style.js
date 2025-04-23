import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { theme } from "../../theme";

export const StyledCarouselProvider = styled(CarouselProvider)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  height: 500px;
  width: 500px;
  z-index: -1;
  max-width: 100vw;
`;

export const StyledSlide = styled(Slide)`
  display: flex;
  img {
    object-fit: fill;
    height: 100%;
  }
`;

export const SlideNumber = styled.p``;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const StyleButtonBack = styled(ButtonBack)`
  font-family: ${theme.fontFamily.copyFont};
  padding: 5px;
  font-size: 1rem;
  width: 50px;
  border-radius: 30px;
  margin: 5px 0px;
`;

export const StyledButtonNext = styled(ButtonNext)`
  font-family: ${theme.fontFamily.copyFont};
  padding: 5px;
  font-size: 1rem;
  width: 50px;
  border-radius: 30px;
  margin: 5px 0px;
`;
