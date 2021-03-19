import Link from "next/link";
import Head from "next/head";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaTag, FaCalendarWeek, FaCalendarCheck } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";


export default function Events() {
  const campaignImages = [
    {
      src: "/images/speakingatsummit.jpg",
      caption: "Nsikak Umoren giving insights at the event",
    },
    {
      src: "/images/onpanel.jpg",
      caption: "Nsikak Umoren on Youth Summit Panel",
    },
    {
      src: "/images/speaking.jpg",
      caption: "Nsikak Umoren speaking at the event",
    },
    {
      src: "/images/withcomrade.jpg",
      caption: "Nsikak Umoren saluting a comrade at the event",
    },
  ];

  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen2, setOpen2] = useState(false);
  const [photoIndex2, setPhotoIndex2] = useState(0);

  return (
    <>
      <Head>
        <title>Events and Campaign Tour | NsikaUmorenk Umoren Campaign</title>
        <meta
          name="description"
          content="Nsikak Umoren's has a lot of events as well as a campaign tour for 2023 campaign"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding="2rem">
        <Heading
          id="about-page-header"
          py={2}
          pb={4}
          as="h2"
          sx={{
            fontFamily: "Quicksand",
            display: "flex",
            flexWrap: "wrap",
          }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text mr={2} ml={2} color="green.500">
            Recent
          </Text>
          <Text> Events</Text>
        </Heading>

        <Flex
         flexDir={{
           base:'column', md:'row'
         }}
        >
          <Stack
            bg="url('/images/ytmeeting.jpg')"
            bgColor="rgba(0,0,0,0.5)"
            bgBlendMode="darken"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            width={{
              base:'100%', md:'48%'
            }}
            height="450px" //420px
            display="flex"
            flexDir="column"
            mr={2}
            justifyContent="flex-end"
          >
            <Box width="80%" p="3" className="qfont">
              <Flex alignItems="center">
                <Box as="span" color="green.600">
                  <FaTag />
                </Box>
                <Text px={1} as="small" color="green.500">
                  Recent
                </Text>
              </Flex>
              <Text
                fontSize="25px"
                lineHeight="23px"
                className="afont"
                py={2}
                color="white"
              >
                First Obot Akara Youth Summit
              </Text>
              <Flex alignItems="center">
                <Box as="span" color="red.600">
                  <FaCalendarCheck />
                </Box>
                <Text px={1} as="small" color="red.500" fontWeight="bold">
                  12<sup>th</sup> March
                </Text>
              </Flex>
            </Box>
          </Stack>

          <Box
            width={{
              base: "100%",
              md: "49%",
            }}
          >
            <Text fontSize="20px" className="qfont" textAlign='center'p={2} fontWeight='semibold' >
              Photos from the event
            </Text>
            <Flex wrap='wrap' justifyContent='space-between'>
            {campaignImages.map((image, index) => {
             
                return (
                  <Box
                  width='48%'
                  flexBasis='49%'
                  mb={2}
                    key={index}
                    onClick={() => {
                      setOpen(true);
                      setPhotoIndex(index);
                    }}
                    className="col-md-4 col-sm-6"
                  >
                    <Box className="item">
                      <Box className="img-bx">
                        <Image src={image.src} alt={image.caption} />
                      </Box>
    
                      <Box className="afont" textAlign='center'>{image.caption}</Box>
                    </Box>
                  </Box>
                )
                
              
                
                
                
                
                  })}
              </Flex>
          </Box>
        </Flex>
                <Heading
          id="about-page-header"
          py={2}
          pb={4}
          as="h2"
          sx={{
            fontFamily: "Quicksand",
            display: "flex",
            flexWrap: "wrap",
          }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text mr={2} ml={2} color="green.500">
            Upcoming
          </Text>
          <Text> Events</Text>
        </Heading>
<Flex justifyContent='space-between'>
        <Stack
            height="fit-content"
            width={{
              base: "100%",
              md: "45%",
            }}
          >
           
        <Flex mb="auto" height="200px" boxShadow="md" mb={5} display={{base:'flex', md:'none'}}>
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/women-meet.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Upcoming
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="23px"
                  className="afont"
                  py={2}
                >
                Campaign Rally with Women of Obot Akara
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    21<sup>st</sup> April
                  </Text>
                </Flex>
              </Box>
            </Flex>
           
           <Flex mb="auto" height="200px" boxShadow="md" mb={5}>
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/youth.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Upcoming
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="24px"
                  className="afont"
                  py={2}
                >
                  Meeting with the Youths in Ikot Ekpene{" "}
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    2<sup>nd</sup> April
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex mb="auto" height="200px" boxShadow="md">
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/evt1.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Upcoming
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="24px"
                  className="afont"
                  py={2}
                >
                  Meeting with elders in Essien Udim{" "}
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    7<sup>th</sup> April
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Stack>
          <Stack
            bg="url('/images/women-meet.jpg')"
            bgColor="rgba(0,0,0,0.7)"
            bgBlendMode="darken"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            width="52%"
            height="420px"
            display={{ base: "none", md: "flex" }}
            flexDir="column"
            justifyContent="flex-end"
          >
            <Box width="80%" p="3" className="qfont">
              <Flex alignItems="center">
                <Box as="span" color="green.600">
                  <FaTag />
                </Box>
                <Text px={1} as="small" color="green.500">
                  Upcoming
                </Text>
              </Flex>
              <Text
                fontSize="25px"
                lineHeight="23px"
                className="afont"
                py={2}
                color="white"
              >
                                Campaign Rally with Women of Obot Akara

              </Text>
              <Flex alignItems="center">
                <Box as="span" color="red.600">
                  <FaCalendarWeek />
                </Box>
                <Text px={1} as="small" color="red.500" fontWeight="bold">
                  21<sup>st</sup> April
                </Text>
              </Flex>
            </Box>
          </Stack>
      </Flex>
      </Box>

      {isOpen && (
      <Lightbox
        mainSrc={campaignImages[photoIndex].src}
        nextSrc={campaignImages[(photoIndex + 1) % campaignImages.length]}
        prevSrc={campaignImages[(photoIndex + campaignImages.length - 1) % campaignImages.length]}
        onCloseRequest={() => setOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + campaignImages.length - 1) % campaignImages.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + campaignImages.length + 1) % campaignImages.length)

        }
      imageCaption={<Box as='h5' w='90vw' fontSize='20px' py={4} textAlign='center' m='auto' className="qfont">{campaignImages[photoIndex].caption}</Box>}
      />
    )}
     
    </>
  );
}
