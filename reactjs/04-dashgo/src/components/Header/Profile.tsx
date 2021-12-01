import {Flex, Box, Text, Avatar} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData= true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Fabio Teraoka</Text>
        <Text color="gray.300" fontSize="small">
          fteraoka@gmail.com
        </Text>
      </Box>)}

      <Avatar
        size="md"
        name="Fabio Teraoka"
        src="https://github.com/fabioteraoka.png"
      />
    </Flex>
  );
}
