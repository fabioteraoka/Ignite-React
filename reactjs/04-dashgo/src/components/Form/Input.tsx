

import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

export default function Input({name, label, ...rest}: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              name={name}
              id={name}
              w="90%"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              color="white"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}
