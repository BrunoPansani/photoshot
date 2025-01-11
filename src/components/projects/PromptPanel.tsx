import BuyShotButton from "@/components/projects/shot/BuyShotButton";
import { getRefinedStudioName } from "@/core/utils/projects";
import useProjectContext from "@/hooks/use-project-context";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Project, Shot } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { BsLightbulb } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { useMutation } from "react-query";
import PromptsDrawer from "./PromptsDrawer";

const PromptPanel = () => {
  const {
    project,
    shotCredits,
    addShot,
    updateCredits,
    shotTemplate,
    updateShotTemplate,
    promptInputRef,
    updatePromptWizardCredits,
    promptImageUrl,
    setPromptImageUrl,
  } = useProjectContext();

  const { mutate: createPrediction, isLoading: isCreatingPrediction } =
    useMutation(
      "create-prediction",
      (project: Project) =>
        axios.post<{ shot: Shot }>(`/api/projects/${project.id}/predictions`, {
          prompt: promptInputRef.current!.value,
          seed: shotTemplate?.seed,
          ...(promptImageUrl && { image: promptImageUrl }),
        }),
      {
        onSuccess: (response) => {
          addShot(response.data.shot);
          promptInputRef.current!.value = "";
          setPromptImageUrl(undefined);
        },
      }
    );

  return (
    <Flex
      as="form"
      flexDirection="column"
      onSubmit={(e) => {
        e.preventDefault();
        if (promptInputRef.current!.value) {
          createPrediction(project);
          updateShotTemplate(undefined);
        }
      }}
      borderRadius="xl"
      p={{ base: 5, md: 7 }}
      mb={10}
      backgroundColor="white"
    >
      <Flex alignItems="center" justifyContent="space-between">

        <Text fontSize="2xl" fontWeight="semibold">
          Studio <b>{getRefinedStudioName(project)}</b>{" "}
        </Text>
        <BuyShotButton
          credits={shotCredits}
          onPaymentSuccess={(credits, promptWizardCredits) => {
            updateCredits(credits);
            updatePromptWizardCredits(promptWizardCredits);
          }}
        />
      </Flex>
      <HStack mt={2}>
        <PromptsDrawer />
      </HStack>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 2 }}
        my={4}
        width="100%"
      >
        <Box flex="1">
          <Input
            size="lg"
            placeholder="Quem você quer ser?"
            disabled={shotCredits === 0}
            ref={promptInputRef}
            backgroundColor="white"
            isRequired
            shadow="lg"
            focusBorderColor="gray.400"
            _focus={{ shadow: "md" }}
            mr={2}
          />
        </Box>
      </Flex>

      <Flex gap={2} flexDirection={{ base: "column", sm: "row" }}>
        {promptImageUrl && (
          <HStack
            flex="1"
            mx={3}
            my={3}
            alignItems="flex-start"
            position="relative"
            overflow="hidden"
          >
            <Image
              style={{ borderRadius: 5 }}
              unoptimized
              alt="prompt"
              src={promptImageUrl}
              width={48}
              height={48}
            />
            <Text fontSize="md">
              A nova foto usará <b>esta imagem</b> como guia (modo imagem para imagem).
              <br />
              <Button
                onClick={() => {
                  setPromptImageUrl(undefined);
                }}
                size="sm"
                variant="link"
                colorScheme="red"
              >
                Remove
              </Button>
            </Text>
          </HStack>
        )}
        {shotTemplate && (
          <HStack
            flex="1"
            mx={3}
            my={3}
            alignItems="flex-start"
            position="relative"
            overflow="hidden"
          >
            <Image
              style={{ borderRadius: 5 }}
              placeholder="blur"
              blurDataURL={shotTemplate.blurhash || "placeholder"}
              unoptimized
              alt={shotTemplate.prompt}
              src={shotTemplate.outputUrl!}
              width={48}
              height={48}
            />
            <Text fontSize="md">
              A nova foto usará <b>o mesmo estilo</b> desta imagem (mesma seed).
              <br />
              <Button
                onClick={() => {
                  updateShotTemplate(undefined);
                }}
                size="sm"
                variant="link"
                colorScheme="red"
              >
                Remover
              </Button>
            </Text>
          </HStack>
        )}

        {!shotTemplate && !promptImageUrl && (
          <Box flex="1">
            <VStack alignItems="flex-start">
              <Text color="beige.500" fontSize="sm">
                <Icon as={BsLightbulb} /> Adicione palavras-chave simples como{" "}
                <b>um viking, um astronauta, um instrutor de esqui</b>... E nós faremos o
                resto!
              </Text>
            </VStack>
          </Box>
        )}
        <Button
          disabled={shotCredits === 0}
          type="submit"
          size="lg"
          variant="brand"
          rightIcon={<FaCameraRetro />}
          isLoading={isCreatingPrediction}
        >
          {shotCredits === 0 ? "Sem fotos restantes" : "Gerar"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default PromptPanel;
