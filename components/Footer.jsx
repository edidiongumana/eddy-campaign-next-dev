import { Box, List, ListIcon, ListItem } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Text, Link as OLink } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      minHeight="320px"
      bg="purple.800"
    >
      {/* top box */}
      <Flex p='2rem' flexDir={{
        base:'column', md:'row'
      }}>
        <Box width={{base:'100%', md:'50%'}}>
          <Flex className="qfont" justifyContent={{
            base:'center', md:'initial'
          }}>
            <Text fontWeight="semibold" className='caption-footer' color="green.500">
              Nsikak
            </Text>
            <Text fontWeight="semibold" className='caption-footer' color="red.500">
              Umoren
            </Text>
          </Flex>
          <Text
            as="small"
            textTransform="uppercase"
            className="afont"
            display='block'
            width='fit-content'
            sx={{ marginTop: "-10px" }}
            color="whiteAlpha.800"
            m={{base:'auto', md:'initial'}}
          >
            For federal house of representatives
          </Text>
        </Box>

        <Box id='footer-link-box' display='flex' mt={{base:'20px', md:'20px'}} justifyContent='space-between' width={{base:'100%', md:'50%'}} flexDir={{base:'row-reverse', md:'row'}}>
        <List spacing={3} color="whiteAlpha.900" width='40%'>
          <Text fontSize="20px" className="afont">
            Follow Nsikak{" "}
          </Text>

          <a href="https://www.facebook.com/NsikakUton" target="_blank">
            <ListItem className="qfont" cursor="pointer" mt="0.75rem">
              <ListIcon as={FaFacebookSquare} color="green.600" />
              Facebook
            </ListItem>
          </a>

          {/* <a href="https://www.instagram.com" target="_blank">
            <ListItem className="qfont" cursor="pointer" mt="0.75rem">
              <ListIcon as={FaInstagramSquare} color="green.600" />
              Instagram
            </ListItem>
          </a> */}

          <a href="https://twitter.com/SykesMoren2023" target="_blank">
            <ListItem className="qfont" cursor="pointer" mt="0.75rem">
              <ListIcon as={FaTwitterSquare} color="green.600" />
              Twitter
            </ListItem>
          </a>
        </List>
        {/* links */}
        <List spacing={3} color="whiteAlpha.900" width='50%'>
          <Text fontSize="20px" className="afont">
            Quick Links
          </Text>
          <Link href="/about">
            <ListItem className="qfont" cursor="pointer">
              <ListIcon as={FaExternalLinkAlt} color="green.600" />
              About Nsikak
            </ListItem>
          </Link>

          <Link href="/manifesto">
            <ListItem className="qfont" cursor="pointer">
              <ListIcon as={FaExternalLinkAlt} color="green.600" />
              Nsikak's Manifesto (2023)
            </ListItem>
          </Link>

           <Link href="/events">
            <ListItem className="qfont" cursor="pointer">
              <ListIcon as={FaExternalLinkAlt} color="green.600" />
              Campaign Events
            </ListItem>
          </Link>
          
          <Link href="/support">
            <ListItem className="qfont" cursor="pointer">
              <ListIcon as={FaExternalLinkAlt} color="green.600" />
              Support Groups
            </ListItem>
          </Link>
          <Link href="/contact">
            <ListItem className="qfont" cursor="pointer">
              <ListIcon as={FaExternalLinkAlt} color="green.600" />
              Send Feedback
            </ListItem>
          </Link> 
        </List>
        </Box>
      </Flex>

      {/* bootm bar */}
      <Flex
        alignItems="center"
        justifyContent="center"
        padding="2rem"
        minHeight="50px"
        bg="rgba(0,0,0,0.6)"
      >
        <Text color="white" className="afont">
          © Copyright 2021 Nsikak Umoren.
        </Text>
      </Flex>
    </Flex>
  );
}
