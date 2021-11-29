import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
}

export default function NavLink({icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="stretch" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text m="0" ml="4" fontWeight="medium" align="center">
        {children}
      </Text>
    </Link>
  );
}
