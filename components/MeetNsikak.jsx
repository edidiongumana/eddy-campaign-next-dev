import {
  Box,
  Flex,
  Text,
  Image,
  useMediaQuery,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import SectionWrap from "./SectionWrap";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Heading } from '@chakra-ui/layout';

export default function MeetNsikak() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const aboutFlexDir = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Flex
      mt={3}
      boxShadow="lg"
      borderRadius="0 0 20px 20px"
      px="2rem"
      height={{base:'fit-content', md:'400px'}}
      flexDir={aboutFlexDir}
    >
       <Image
       display={{base:'initial', md:'none'}}
              data-aos="fade-in"
            objectFit="contain"
            height={isSmallerThan600 ? "400px" : "100%"}
            src="/images/meetme.png"
            alt="Nsikak Umoren"
            />
      <Box
        margin="auto"
        mb={2}
        height='100%'
       width={{base:'100%', md:'50%'}}
       position='relative'
       zIndex='3'
      >
      <Heading
            className='caption'
             data-aos='fade-right'
             data-aos-easing="ease-in-sine"
              as="h2"
              sx={{
                fontFamily: "Quicksand",
                display: "flex",
              }}
            >
              <Text> Meet</Text>

<Text mr={2} ml={2} color="green.500">
  Nsikak{" "}
</Text>
<Text color="red.500"> Umoren</Text>
            </Heading>
        <Box>

        <Text mb={2} className="afont" color='gray'>
        Around the globe, there is an expanding passion for youth as politics. Some political groups are transforming to react to the growing number of youths that wish to affect the political system. Political ideologies appealing to young people that were as soon as considered "fringe" ideas are coming to be mainstream, much more youngsters are connecting themselves with non-popular political events. 
        </Text>
        </Box>

        <Link href="/about">
          <Box mt={4} as="a" cursor="pointer">
            <Text
              _hover={{ textDecoration: "underline" }}
              fontSize="18px"
              fontWeight="bold"
              className="qfont"
            >
              Read More
            </Text>
          </Box>
        </Link>
      </Box>

      <Box
      display={{base:'none', md:'flex'}}
      id='about-image-box'
        height="100%"
        width='50%'
        padding='20px 0 0 0'
        
        justifyContent='center'
        alignItems='center'
        backgroundImage='url(/images/hor.jpg)'
        bgSize='contain'
        bgPosition='center'
        bgBlendMode='overlay'
        bgColor='blackAlpha.500'
      >
        <Image
            //   data-aos="fade-up-right"
            objectFit="contain"
            height={isSmallerThan600 ? "100%" : "100%"}
            src="/images/meetme.png"
            alt="Nsikak Umoren"
            />
            
      </Box>
    </Flex>
  );
}
