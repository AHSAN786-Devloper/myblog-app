import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Tag,
	Text,
} from "@chakra-ui/react";
import React from "react";

const PostCard = ({ post }) => {
	return (
		<Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
			<Image src={post.imageUrl} />
			<Stack p="4">
				<Heading mb="4" fontSize="xl">
					{post.title}
				</Heading>
				<Flex mb="4" align="center">
					<Avatar size="sm" src={post.avatar} />
					<Text mb="4" fontSize="md" mr="2" fontWeight="bold">
						{post.authorName}
					</Text>
					<Text mb="4" fontSize="md">
						{post.publishDate}
					</Text>
				</Flex>
				<Text mb="4">{post.description}</Text>
				<Flex>
					<Tag>{post.tags}</Tag>
				</Flex>
				<Box alignSelf="flex-end">
					<Button colorScheme="orange">Read More</Button>
				</Box>
			</Stack>
		</Stack>
	);
};

export default PostCard;
