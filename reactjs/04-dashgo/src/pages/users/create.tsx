import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Input, Text, HStack, Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";


export default function CreateUser() {
    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Box>
                                <Text mb="8px">Nome completo</Text>
                                <Input name="name" label="nome completo" color="white"/>
                            </Box>
                            <Box>
                            <Text mb="8px">E-mail</Text>
                            <Input name="email" type="email" label="E-mail" color="white"/>
                            </Box>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Box>
                                <Text mb="8px">Senha</Text>
                                <Input name="password" type= "password" label="senha" color="white"/>
                            </Box>
                            <Box>
                                <Text mb="8px">Confirmação de senha</Text>
                                <Input name="password_confirmation" type="password" label="confirmação da senha" color="white"/>
                            </Box>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}