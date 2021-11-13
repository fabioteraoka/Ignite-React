import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        color="white"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={3}>
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />

        </Stack>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            SignIn
          </Button>
      </Flex>
    </Flex>
  );
}
