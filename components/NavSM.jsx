import { Flex, IconButton, Text, useDisclosure} from "@chakra-ui/react";
import  Link  from "next/link";

import { BiMenuAltLeft } from "react-icons/bi";
import NavSMDrawer from "./NavSMDrawer";
const navStyle = {
  margin: "0 5px",
};

function NavSM(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return ( <>
    <NavSMDrawer isOpen={isOpen} onClose={onClose}/>


    <Link href='/'>

<a style={{display:'flex'}}>
  
  <Text mr={1} color='green.500' fontSize="20px" className='qfont' fontWeight='bold'>
    Nsikak 
  </Text>
    <Text color='red.500' fontSize="20px" className='qfont' fontWeight='bold'> Umoren 
      </Text> 
</a>

</Link>
      <IconButton
     onClick={onOpen}
          bg="transparent"
          aria-label="Go to cart"
          _focus={{
            boxShadow: "0",
          }}
          icon={
      <span
        style={{
          fontSize: "22px",
        }}
      >
        <BiMenuAltLeft />
      </span>
       }
       />
    </>
  );
}

export default NavSM;
