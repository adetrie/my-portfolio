import styled from 'styled-components';
import {motion} from "framer-motion";
import {GlobalStyles} from "../../../styles/GlobalStyles";

export const StyledNavigationScroller = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${GlobalStyles.colors.lime};
  transform-origin: 0%;
  z-index: 1000;
`;