import Link from "next/link";
import Head from "next/head";
import { Box, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import css from '../styles/support.module.css'

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
          <Text mr={2} color="green.500">
            Support
          </Text>
          <Text> Groups</Text>
        </Heading>

<Text fontSize='22px' className='afont'>
  Nsikak Umoren has garnered the support of various groups and well meaning citizen of his community</Text>     
  
<Text fontSize='22px' className='afont'>
These include the following:</Text>     
  

<div className={css.container}>
  <div className={css.list}>
    <div className={css.num}>
      <h3> 
      Nka Iban Ikot Obio Awan
      </h3>
    </div>
    <div className={css.num}>
      <h3>
      
Nigeria Automobile Technician (NATA)

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Nka Iban Ikot Ikpe

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Nka Ekpeme women association (AKEWA)

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Nka Iban Ikot Okure

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Etip Ediene Women Organization (EEWO)

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Nka Iban Ikot Obong Edong

      </h3>
    </div>
    <div className={css.num}>
      <h3>
Presbyterial Young People Association of Nigeria (PYPAN)

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      Men Christian Association (MCA)
      </h3>
    </div>
    <div className={css.num}>
      <h3>
Women Guide Association

      </h3>
    </div>
    <div className={css.num}>
      <h3>
Ikot Udota Youth & Sports Association

      </h3>
    </div>
    <div className={css.num}>
      <h3>
      
National association of computer science student (NACOSS)
      </h3>
    </div>
  </div>
</div>
<h5 className={css.message}>Hover Over List Items</h5>
      </Box>
    </>
  );
}

