"use client";

import TiltImage from "@/components/home/TiltImage";
import PageContainer from "@/components/layout/PageContainer";
import { prompts } from "@/core/utils/prompts";
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

export type TPrompt = (typeof prompts)[number];

const PromptDetailPage = ({
  prompt,
  morePrompts,
}: {
  prompt: TPrompt;
  morePrompts: TPrompt[];
}) => {
  const { hasCopied, onCopy } = useClipboard(prompt.prompt);

  return (
    <PageContainer>
      <Box mb={4}>
        <Button
          color="beige.500"
          leftIcon={<HiArrowLeft />}
          variant="link"
          href="/prompts"
          as={Link}
        >
          Voltar aos prompts
        </Button>
      </Box>
      <Flex
        flexDirection="column"
        borderRadius="xl"
        p={{ base: 6, md: 10 }}
        pt={8}
        backgroundColor="white"
        alignItems="flex-start"
      >
        <VStack spacing={0} alignItems="flex-start">
          <Text
            textTransform="capitalize"
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "3xl" }}
            as="h1"
          >
            {prompt?.label} avatar prompt
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} as="h2">
            Se torne {prompt?.label} com nosso prompt de IA gratuito
          </Text>
        </VStack>
        <Flex
          flexDirection={{ base: "column-reverse", sm: "row" }}
          mt={{ base: 4, md: 10 }}
          width="100%"
          gap={4}
        >
          <Flex
            flex="1"
            alignItems={{ base: "center", md: "flex-start" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
          >
            <TiltImage size="100%" character="romy" slug={prompt.slug} />
            <TiltImage size="100%" character="sacha" slug={prompt.slug} />
          </Flex>
          <VStack flex="1" spacing={5}>
            <Text fontFamily="mono">{prompt.prompt}</Text>
            <HStack justifyContent="flex-end" width="100%" textAlign="right">
              <Button onClick={onCopy} variant="ghost" colorScheme="beige">
                {hasCopied ? "Copied!" : "Copy prompt"}
              </Button>
              <Button
                variant="brand"
                textTransform="capitalize"
                href="/dashboard"
                as={Link}
                rightIcon={<FaMagic />}
              >
                Usar prompt
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
      <VStack alignItems="flex-start" overflow="hidden" my={10}>
        <Text fontWeight="bold" fontSize="2xl">
          Mais prompts de IA
        </Text>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          width="100%"
          marginX="auto"
        >
          {morePrompts.map((prompt, i) => (
            <Link
              key={prompt.label}
              href={`/prompts/dreambooth/${prompt.slug}`}
            >
              <VStack p={2} spacing={1} alignItems="flex-start">
                <TiltImage
                  size="100%"
                  character={i % 2 ? "sacha" : "romy"}
                  slug={prompt.slug}
                />
                <Text
                  color="beige.500"
                  fontWeight="semibold"
                  textTransform="capitalize"
                >
                  {prompt.label}
                </Text>
              </VStack>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
    </PageContainer>
  );
};

export default PromptDetailPage;
