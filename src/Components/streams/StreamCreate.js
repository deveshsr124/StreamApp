import React, { useState } from "react";

import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	ThemeProvider,
	theme,
	Box,
	Stack,
	Button,
	Text,
} from "@chakra-ui/react";

const StreamCreate = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [emptyerr, setEmptyErr] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if (title === "" && desc === "") {
			setEmptyErr(true);
		} else {
			const values = {
				title,
				desc,
			};
			console.log("on submit", values);
		}
	};
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleDescChange = (e) => {
		setDesc(e.target.value);
	};
	return (
		<div>
			<Box
				mt="10%"
				display="center"
				justifyContent="center"
				alignItems="center"
				height="100%"
			>
				<form onSubmit={onSubmit}>
					<Stack
						spacing="20px"
						border="2px solid"
						borderColor="whitesmoke"
						p="20px"
						borderRadius="7px"
						boxShadow="lg"
					>
						<ThemeProvider theme={theme}>
							<FormControl id="title" w="300px">
								<FormLabel fontSize="15px" fontWeight="800">
									Title
								</FormLabel>
								<Input type="text" value={title} onChange={handleTitleChange} />
								{emptyerr === true ? (
									<Text color="red" fontSize="14px">
										This Field is required
									</Text>
								) : (
									""
								)}
							</FormControl>
							<FormControl id="description" w="300px">
								<FormLabel fontSize="15px" fontWeight="800">
									Description
								</FormLabel>
								<Input type="text" value={desc} onChange={handleDescChange} />
								{emptyerr === true ? (
									<Text color="red" fontSize="14px">
										This Field is required
									</Text>
								) : (
									""
								)}
							</FormControl>

							<Box display="flex" alignItems="center" justifyContent="center">
								<Button
									colorScheme="blue"
									type="submit"
									w="150px"
									height="40px"
									border="transparent"
									fontSize="15px"
								>
									Submit
								</Button>
							</Box>
						</ThemeProvider>
					</Stack>
				</form>
			</Box>
		</div>
	);
};

export default StreamCreate;
