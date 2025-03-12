import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonComponent = styled.button`
    background-color: ${({ colors }) => backgroundColors[colors]};
    padding: 15px;
    border: 1px solid ${({colors}) => fontColors[colors]};
    border-radius: 30px;
    color: ${({colors}) => fontColors[colors]};
    font-size: ${({size}) => fontSizes[size]};;
    font-weight: 600;

        &:hover {
            background-color: ${({ colors }) => hoverBgColors[colors]};
            color: ${({ colors }) => hoverFontColors[colors]};
            border: 1px solid ${({colors}) => hoverFontColors[colors]};
            cursor: pointer;
        }
`;

const fontSizes = {
  big: "1.1rem",
  small: "0.8rem"
}

const fontColors = {
  primary: theme.color.orange,
  inverted: theme.color.blue
}

const hoverFontColors = {
  primary: theme.color.blue,
  inverted: theme.color.orange  
}

const backgroundColors = {
    primary: theme.color.blue,
    inverted: theme.color.orange
  };
  
  const hoverBgColors = {
    primary: theme.color.orange,
    inverted: theme.color.blue
  };