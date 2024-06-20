import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          All About Apples
        </Heading>
        <Box>
          <Image src="/images/apple-orchard.jpg" alt="Apple Orchard" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Where Apples Grow
          </Heading>
          <Text>
            Apples are grown in orchards all around the world. The top apple-producing countries include China, the United States, Poland, and India. Apples thrive in temperate climates and are typically harvested in the fall.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            History of Apples
          </Heading>
          <Text>
            Apples have been cultivated for thousands of years. They originated in Central Asia and were brought to North America by European colonists. Today, there are thousands of apple varieties, each with its own unique flavor and characteristics.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;