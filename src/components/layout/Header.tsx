import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { LogoIcon } from "./LogoIcon";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      marginX="auto"
      maxWidth="container.lg"
      px="2"
    >
      <Flex justifyContent="space-between" py={4} as="footer">
        <Flex
          role="group"
          as={Link}
          href="/"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Icon
            transition="200ms all"
            _groupHover={{ color: "brand.500" }}
            as={LogoIcon}
          />
          <Text display={{ base: "none", sm: "inherit" }}>Photowiz</Text>
        </Flex>
        <HStack spacing={1}>
          <Button
            as={Link}
            href="/prompts"
            colorScheme="beige"
            variant="ghost"
            size="sm"
          >
            Prompts
          </Button>
          {session ? (
            <>
              <Tooltip hasArrow label="Public gallery">
                <Button
                  href={`/gallery/${session.userId}`}
                  as={Link}
                  colorScheme="beige"
                  variant="ghost"
                  size="sm"
                >
                  Minha Galeria
                </Button>
              </Tooltip>
              <Button href="/dashboard" as={Link} variant="brand" size="sm">
                Painel
              </Button>
              <Tooltip hasArrow label="Logout">
                <IconButton
                  aria-label="logout"
                  icon={<HiLogout />}
                  size="sm"
                  colorScheme="beige"
                  variant="ghost"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <Button href="/login" as={Link} variant="brand" size="sm">
              Login
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
