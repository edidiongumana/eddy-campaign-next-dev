import {
    Box,
    Flex,
    Text,
    useMediaQuery,
    Image,
} from "@chakra-ui/react"
import SectionWrap from "./SectionWrap";

export default function Header() {
    const [isLargerThan914] = useMediaQuery("(min-width: 914px)")
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)")

    return (
        <SectionWrap>
            <Flex padding="2rem 2rem 0rem 2rem" height="90%" alignItems="" justifyContent="space-between"
                flexDir={{ base: 'column', md: 'row' }}
            >
                <Box>
                    <Box mb={2}>
                        <Text color="white"
                            px={1}
                            width="fit-content"
                            bgColor="blue.500"
                            fontSize={
                                isLargerThan914 ? '50px' : '33px'
                            }
                            className="afont"
                            fontWeight="bold">
                            Together, We Can
                        </Text>
                    </Box>
                    <Box>
                        <Text color="white"
                            px={1}
                            width="fit-content"
                            bgColor="blue.500"
                            fontSize={
                                isLargerThan914 ? '50px' : '28px'
                            }
                            className="afont"
                            fontWeight="bold">
                            Build it.
                        </Text>
                    </Box>
                    <Box mt={3} width={{ base: "100%", md: "300px" }}>
                        <Text color="grey"
                            px={1}
                            fontSize='15px'
                            className="qfont"
                            fontWeight="500">
                            Let US give citizens equal opportunity through impactful Leadership, inclusive governance, community building, and youth empowerment. <br />
                            <i> ~ Nsikak Umoren.</i>
                        </Text>
                    </Box>

                </Box>

                <Box margin="auto" boxSize={
                    {
                        base: "100%",
                        md: "55%"
                    }
                }>
                    <Image objectFit="cover"
                        src='/images/header-image.png'
                        alt="Nsikak Umoren" />
                </Box>
            </Flex>

        </SectionWrap>
        )
        }