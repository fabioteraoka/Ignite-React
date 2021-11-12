import { Flex, Input, Button, Stack, FormControl } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <Input
              name="email"
              type="email"
              w="90%"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              color="white"
              placeholder="Email"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <Input
              name="password"
              type="password"
              w="90%"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              placeholder="password"
              color="white"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            SignIn
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
