import Link from "next/link";
import Head from "next/head";
import { Box, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaBullseye } from "react-icons/fa";

export default function About() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Head>
        <title>About Nsikak Umoren</title>
        <meta
          name="description"
          content="Nsikak Umoren believes in popular participation. Get all details about him and information on how to participate directly on this site."
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
            fontSize: isSmallerThan600 ? "30px" : "48px",
            display: "flex",
            flexWrap: "wrap",
          }}
          textAlign={{base:'center', md:'left'}}
        >
          <Text> About</Text>
          <Text mr={2} ml={2} color="green.500">
            Nsikak Umoren
          </Text>
        </Heading>
        <Stack>
          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            mb={5}
            height='fit-content'
          >
            <Box  width={{ base: "100%", md: "40%" }}  mb={3}>
              <Image
                mx="auto"
                src="/images/meet-umoren.png"
                width="100%"
                height="100%"
                maxH='450px'
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pl={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
              >
              <Text fontSize='30px' fontWeight='semi-bold' className='afont'>
                Education & Career
              </Text>
              <Text fontSize='18px' className='qfont about-page-content'>

              Nsikak Umoren Uton is a consultant geomedeller and development
              geologist from Nto-Obio Ikang in Obot Akara. He obtained his first
              degree in geology from the University of Calabar and later
              proceeded to the prestigious imperial college, London for his
              Masters in petroleum geology.
              
              </Text>
              <br/>
              <Text fontSize='18px'  className='qfont about-page-content'>
              He is a self-motivated gentleman who strongly believes in
        service to the people. He has a strong drive to deliver on any
        objectives no matter the environment, no matter the limitations. He
        believes that if there’s a will, there will be a way. And if there's a
        way then anything can be achieved.
                </Text>
            </Box>
          </Flex>


          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
            height='fit-content'
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/about2.jpg"
                width="100%"
                height="100%"
                maxHeight='450px'
                objectFit="cover"
                objectPosition="top"
              />
            </Box>

            <Box
              pr={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
             
            >
              <Text fontSize='30px' fontWeight='semi-bold' className='qfont'>
                Leadership Qualities
              </Text>
              <Text fontSize='20px' className='qfont'>

              Nsikak has held several leadership
        positions in his career, some include;
              
              </Text>
              <List className='afont' fontSize='17px' pt={2}>
                <ListItem>

                <ListIcon color='green.500'>
            <FaBullseye/>
                </ListIcon>
                Executive position at PENGASSAN.
                </ListItem>
                <ListItem>

                <ListIcon color='green.500'>
            <FaBullseye/>
                </ListIcon>
                Member of Parliament, SUG, University of Calabar representing the
        Faculty of Science.
                </ListItem>
                <ListItem>

                <ListIcon color='green.500'>
            <FaBullseye/>
                </ListIcon>
                First financial secretary of  National Association of Obot Akara Students (NAOAS) UNICAL
        CHAPTER. 
                </ListItem>
                <ListItem>

                <ListIcon color='green.500'>
            <FaBullseye/>
                </ListIcon>
                Financial secretary National Association of Geosciences and Mining Students (NAGAMS) UNICAL Chapter.
                </ListItem>
                <ListItem>

                <ListIcon color='green.500'>
            <FaBullseye/>
                </ListIcon>
                Patron of Obot Akara Youth Congress (OYC).
                </ListItem>
              </List>
              <br/>
              <Text fontSize='18px'  className='qfont '>
              Being a leader is
        beyond titles, it's more about possessing qualities to lead. Qualities
        that Nsikak has displayed while serving in those positions. He is a team
        worker who believes in working with people and carrying them along.
        There's a saying that "If you want to go fast go alone, but if you want
        to go far go with people." Nsikak understands this and it's one of the
        many qualities that makes him stand out as an effective leader.
                </Text>
            </Box>
          </Flex>
        </Stack>
 
      </Box>
    </>
  );
}
