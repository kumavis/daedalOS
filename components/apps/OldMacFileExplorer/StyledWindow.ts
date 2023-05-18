import { m as motion } from "framer-motion";
import styled from "styled-components";

type StyledWindowProps = {
  $backgroundColor?: string;
  $isForeground: boolean;
};

const StyledWindow = styled(motion.section)<StyledWindowProps>`
  background-color: #fff;
  box-shadow: none;
  contain: strict;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  header + * {
    height: calc(100% - 16px);
  }

  @font-face {
    font-family: "ChicagoRegular";
    src: url("./System/Fonts/bitchicago12-webfont.eot?iefix") format("eot"),
      url("./System/Fonts/bitchicago12-webfont.woff") format("woff"),
      url("./System/Fonts/bitchicago12-webfont.ttf") format("truetype"),
      url("./System/Fonts/bitchicago12-webfont.svg#webfontvbCjnPDX")
        format("svg");
    font-style: normal;
    font-weight: 400;
  }

  font-family: "ChicagoRegular", Sans-Serif;
`;

export default StyledWindow;
