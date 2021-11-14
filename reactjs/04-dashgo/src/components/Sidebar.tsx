import { Box, Stack, Text, Link,Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export default function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="stretch">
                                <Icon as={RiDashboardLine} fontSize="20"/>
                                <Text m="0" ml="4" fontWeight="medium" align="center" >Dashboard</Text>
                        </Link>
                        <Link display="flex" align="center">
                                <Icon as={RiContactsLine} fontSize="20"/>
                                <Text m="0" ml="4" fontWeight="medium" align="center">Usuarios</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Automação</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="stretch">
                                <Icon as={RiInputMethodLine} fontSize="20"/>
                                <Text m="0" ml="4" fontWeight="medium" align="center" >Formulario</Text>
                        </Link>
                        <Link display="flex" align="center">
                                <Icon as={RiGitMergeLine} fontSize="20"/>
                                <Text m="0" ml="4" fontWeight="medium" align="center">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}
