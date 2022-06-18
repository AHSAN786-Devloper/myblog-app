import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
	return (
		<Container
			flexDirection={{ base: "column", md: "row" }}
			maxW="1300px"
			display="flex"
			h="100vh"
			justifyContent="space-evenly"
			alignItems="center"
		>
			<Stack h="350px" justify="space-around">
				<Heading as="h1" fontSize={{ md: "6xl", sm: "3xl", base: "2xl" }}>
					Get Crypto Related Knowledge
				</Heading>
				<Text as="p" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
					nulla.
				</Text>
				<Box>
					<Button colorScheme="orange">Check Posts</Button>
				</Box>
			</Stack>
			<Flex>
				<Image w="80%" h="60vh" ml="6" src="/images/btc.svg" />
			</Flex>
		</Container>
	);
};

export default Hero;
