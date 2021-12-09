import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Header } from "../../components/Header";
import { useMutation} from "react-query";
import Link from "next/link";
import {Input} from "../../components/Form/Input";
import { api } from "../../services/api";
import Sidebar from "../../components/Sidebar";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup
    .string()
    .required("Senha obrigatorio")
    .min(6, "Senha deve ter no minimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatorio")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
});

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation(async(user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })
    return response.data.user
  },{
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    },
  });

  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values);

    router.push('/users')
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Box>
                <Text mb="8px">Nome completo</Text>
                <Input
                  name="name"
                  label="nome completo"
                  color="white"
                  error = {errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Text mb="8px">E-mail</Text>
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  color="white"
                  error = {errors.email}
                  {...register("email")}
                />
              </Box>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Box>
                <Text mb="8px">Senha</Text>
                <Input
                  name="password"
                  type="password"
                  label="senha"
                  color="white"
                  error = {errors.password}
                  {...register("password")}
                />
              </Box>
              <Box>
                <Text mb="8px">Confirmação de senha</Text>
                <Input
                  name="password_confirmation"
                  type="password"
                  label="confirmação da senha"
                  color="white"
                  error = {errors.password_confirmation}
                  {...register("password_confirmation")}
                />
              </Box>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit" 
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                >
                    Salvar
                </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
