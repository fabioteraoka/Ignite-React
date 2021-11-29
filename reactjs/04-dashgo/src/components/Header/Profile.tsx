import {Flex, Box, Text, Avatar} from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fabio Teraoka</Text>
        <Text color="gray.300" fontSize="small">
          fteraoka@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Fabio Teraoka"
        src="https://github.com/fabioteraoka.png"
      />
    </Flex>
  );
}
