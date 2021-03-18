import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box, Flex, IconButton, Text 
  } from "@chakra-ui/react"
import Link from "next/link";
import NavLink from "./NavLink";
const navStyle = {
  margin: "5px 0",
  padding: "10px 1.5rem",
  display: "block",
}
function NavSMDrawer(props) {

    return (
     <Drawer placement='left' onClose={props.onClose} isOpen={props.isOpen}>
        <DrawerOverlay>
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader className='rfont' borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody padding={0}>
            <NavLink style={navStyle} linkClass='link'  href="/">
            <Text className='afont'>Home</Text>
          </NavLink>
  
          <NavLink style={navStyle} linkClass='link' href="/about">
            <Text className='afont'>About</Text>
          </NavLink>
          <NavLink style={navStyle} linkClass='link' href="/manifesto">
            <Text className='afont'>Manifesto</Text>
          </NavLink>
           <NavLink style={navStyle} linkClass='link' href="/events">
            <Text className='afont'>Events</Text>
          </NavLink>
          
          <NavLink style={navStyle} linkClass='link' href="/support">
            <Text className='afont'>Support Groups</Text>
          </NavLink>
          <NavLink style={navStyle} linkClass='link' href="/contact">
            <Text className='afont'>Contact</Text>
          </NavLink> 
            </DrawerBody>
            <DrawerFooter>
              
            <Link href='/' style={{display:'block', width:'100%', textAlign: 'center'}} href='/'>
<a style={{display:'block', width:'100%'}}>

<Flex width="100%" textAlign='center' justifyContent='center'>
  
  <Text mr={1} color='green.500' fontSize="20px" className='qfont' fontWeight='bold'>
    Nsikak 
  </Text>
    <Text color='red.500' fontSize="20px" className='qfont' fontWeight='bold'> Umoren 
      </Text> 
</Flex>
</a>
</Link>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
}

export default NavSMDrawer;