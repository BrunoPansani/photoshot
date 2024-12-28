import { formatStudioPrice } from "@/core/utils/prices";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

export const CheckedListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ListItem>
    <ListIcon fontSize="xl" as={HiBadgeCheck} /> {children}
  </ListItem>
);

const Pricing = () => {
  return (
    <SimpleGrid width="100%" spacing={6} columns={{ base: 1, md: 2 }}>
      <Box
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
      >
        <Text mt={2} fontWeight="black" fontSize="4xl">
          Por que não é gratuito?
        </Text>
        <Text mt={2} mb={4}>
          Treinar um modelo de IA personalizado é caro devido aos recursos necessários. Acreditamos em oferecer a melhor qualidade de serviço e experiência aos nossos usuários e estamos comprometidos em criar o melhor modelo de IA para você.
        </Text>
      </Box>
      <Box
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
      >
        <Tag
          py={1}
          px={3}
          shadow="semibold"
          border="2px solid black"
          color="black"
          backgroundColor="brand.500"
        >
          1 Studio + {process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT} fotos
        </Tag>

        <Box mt={2} fontWeight="black" fontSize="3.5rem">
          {formatStudioPrice()}
          <Box
            ml={1}
            as="span"
            fontWeight="500"
            color="coolGray.400"
            fontSize="1.2rem"
          >
            / studio
          </Box>
        </Box>

        <List mt={2} mb={4} spacing={1}>
          <CheckedListItem>
            <b>1</b> Studio com um <b>modelo treinado personalizado</b>
          </CheckedListItem>
          <CheckedListItem>
            <b>{process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> avatares em geração 4K
          </CheckedListItem>
          <CheckedListItem>Refinamento de prompt por IA</CheckedListItem>
          <CheckedListItem>Crie seu próprio prompt</CheckedListItem>
          <CheckedListItem>Patrocínio ao desenvolvimento 💙</CheckedListItem>
        </List>
      </Box>
    </SimpleGrid>
  );
};

export default Pricing;
