import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../BreakPoints";

export const TopVenueWrapper = styled.div`
    margin: auto;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center/90% url(${(
      props
    ) => props.url});
    height: 50vh;
    width: 50vw;

    @media${device.sm}{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat contain center url(${(
      props
    ) => props.url});
    height: auto;
    width: 100vw;
    }
    
      a{
        text-decoration: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        }

}
`;

export const TopVenueInfoDiv = styled.div`
  height: 50%;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-between;
`;

export const TopVenueHeader = styled.h1`
  margin: 0px;
  color: ${theme.color.offwhite};
  word-wrap: break-word;
`;

export const TopVenueParagraph = styled.p`
  color: ${theme.color.offwhite};
  text-align: center;
  font-size: 1.1rem;
  max-width: 80vw;
  word-wrap: break-word;
`;

export const ButtonBox = styled.div`
  width: 70%;
  max-width: 350px;
  display: flex;
  justify-content: space-around;
`;
