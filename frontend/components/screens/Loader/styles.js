import styled from 'styled-components';
import {motion} from "framer-motion";

export const StyledLoader = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: grid;
  justify-content: center;
  align-items: center;
`;
