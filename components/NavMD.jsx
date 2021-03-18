import {  Flex, IconButton, Text } from "@chakra-ui/react";
import  Link from "next/link";
import NavLink from "./NavLink";


const navStyle = {
    margin: "0 5px",
  };

function NavMD(props) {
    return (<>
     <Link href='/'>

<a style={{display:'flex'}}>
  
  <Text mr={1} color='green.500' fontSize="20px" className='qfont' fontWeight='bold'>
    Nsikak 
  </Text>
    <Text color='red.500' fontSize="20px" className='qfont' fontWeight='bold'> Umoren 
      </Text> 
</a>

</Link>
        <Flex alignItems='center'>
          <NavLink href="/" style={navStyle} linkClass='link-md'>
            <Text className='afont'>Home</Text>
          </NavLink>
  
          <NavLink href="/about" style={navStyle} linkClass='link-md'>
            <Text className='afont'>About</Text>
          </NavLink>
          <NavLink href="/manifesto" style={navStyle} linkClass='link-md'>
            <Text className='afont'>Manifesto</Text>
          </NavLink>
           <NavLink href="/events" style={navStyle} linkClass='link-md'>
            <Text className='afont'>Campaign Tour</Text>
          </NavLink>
          
          <NavLink href="/support" style={navStyle} linkClass='link-md'>
            <Text className='afont'>Support Groups</Text>
          </NavLink>
          <NavLink href="/contact" style={navStyle} linkClass='link-md'>
            <Text className='afont'>Contact</Text>
          </NavLink> 

        </Flex>
        </>
    );
}

export default NavMD;