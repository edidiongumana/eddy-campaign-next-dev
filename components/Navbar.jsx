import { Flex, useBreakpointValue } from "@chakra-ui/react";
import NavMD from "./NavMD";
import NavSM from "./NavSM";

export default function Navbar() {
  const navScreens = useBreakpointValue({ base: <NavSM />, md: <NavMD /> });

  return (
    <Flex
      height="70px"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex="10"
      backgroundColor="white"
      className='navbar'
      px='2rem'
      maxW='1366px'
      m='auto'
      
    >
      {navScreens}
    </Flex>
  );
}
