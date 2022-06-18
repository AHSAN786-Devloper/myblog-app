import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";
import { blogData } from "../../Data";
const RecentPost = () => {
	return (
		<Container maxW="1300px">
			<Heading m="8" fontSize="2xl">
				Recent Posts
			</Heading>
			<Grid
				gridGap="4"
				gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
			>
				{blogData.map((post) => (
					<GridItem key={post.title} display="flex" justifyContent="center">
						<PostCard post={post} />
					</GridItem>
				))}
			</Grid>
			<Heading fontSize="2xl" textAlign="center" m="8">
				Read More...
			</Heading>
		</Container>
	);
};

export default RecentPost;
