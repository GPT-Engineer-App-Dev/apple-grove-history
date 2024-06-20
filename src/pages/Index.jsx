import { Box, Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="brand.700" color="white" py={4}>
        <Container maxW="container.md">
          <Heading as="h1" size="lg">Apple Information</Heading>
        </Container>
      </Box>
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">Welcome to the Apple Information Site</Heading>
          <Text fontSize="lg">Learn about where apples grow and their history.</Text>
        </VStack>
      </Container>
      <Box as="footer" bg="brand.700" color="white" py={4} mt="auto">
        <Container maxW="container.md">
          <Text>&copy; 2023 Apple Information. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;