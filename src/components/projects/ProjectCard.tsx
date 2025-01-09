import { getRefinedStudioName } from "@/core/utils/projects";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Project } from "@prisma/client";
import axios from "axios";
import { formatRelative } from "date-fns";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { IoIosFlash } from "react-icons/io";
import { useMutation } from "react-query";
import { ProjectWithShots } from "../pages/StudioPage";
import FormPayment from "./FormPayment";
import ProjectDeleteButton from "./ProjectDeleteButton";
import Image from "next/image";

const ProjectCard = ({
  project,
  handleRefreshProjects,
}: {
  project: ProjectWithShots;
  handleRefreshProjects: () => void;
}) => {
  const {
    mutate: trainModel,
    isLoading: isModelLoading,
    isSuccess,
  } = useMutation(
    `train-model-${project.id}`,
    (project: Project) =>
      axios.post(`/api/projects/${project.id}/train`, {
        prompt,
      }),
    {
      onSuccess: () => {
        handleRefreshProjects();
      },
    }
  );

  const isWaitingPayment = !project.stripePaymentId;
  const isWaitingTraining =
    project.stripePaymentId && !project.replicateModelId;

  const isReady = project.modelStatus === "succeeded";
  const isTraining =
    project.modelStatus === "processing" ||
    project.modelStatus === "pushing" ||
    project.modelStatus === "starting" ||
    project.modelStatus === "queued";

  return (
    <Box
      position="relative"
      backgroundColor="white"
      width="100%"
      pt={4}
      pb={10}
      px={5}
      borderRadius="xl"
      shadow="lg"
    >
      <VStack spacing={4} alignItems="flex-start">
        <Flex width="100%">
          <Box flex="1">
            <Text fontSize="2xl" fontWeight="semibold">
              Studio <b>{getRefinedStudioName(project)}</b>{" "}
              {isReady && (
                <Badge colorScheme="teal">{project.credits} fotos restantes</Badge>
              )}
            </Text>
            <Text textTransform="capitalize" fontSize="sm" color="beige.500">
              {formatRelative(new Date(project.createdAt), new Date())}
            </Text>
          </Box>
          <ProjectDeleteButton
            handleRemove={() => {
              handleRefreshProjects();
            }}
            projectId={project.id}
          />
        </Flex>

        {isWaitingPayment && (
          <FormPayment
            handlePaymentSuccess={() => {
              handleRefreshProjects();
            }}
            project={project}
          />
        )}

        {isWaitingTraining && (
          <>
            <VStack overflow="hidden" width="100%" spacing={4}>
              <Box fontWeight="bold" fontSize="xl">
                Your Studio is ready to be trained!
              </Box>
              <AvatarGroup size="lg" max={10}>
                {project.imageUrls.map((url) => (
                  <Avatar key={url} src={url} />
                ))}
              </AvatarGroup>
              <Button
                variant="brand"
                rightIcon={<IoIosFlash />}
                isLoading={isModelLoading || isSuccess}
                onClick={() => {
                  trainModel(project);
                }}
              >
                Start Training
              </Button>
            </VStack>
          </>
        )}

        {isReady && (
          <Center overflow="hidden" width="100%" marginX="auto">
            <VStack spacing={7}>
              {!project.shots.length ? (
                <VStack spacing={0}>
                  <span>{`You don't have any prompt yet`}.</span>
                  <b>Go to your studio to add one !</b>
                </VStack>
              ) : (
                <AvatarGroup size="xl" max={10}>
                    {project.shots
                    .filter((shot) => Boolean(shot.outputUrl))
                    .map((shot) => (
                      <chakra.span rounded={"full"} position="relative" overflow={"hidden"} >
                        <Image src={shot.outputUrl!} width={80} height={80} alt="Generated image" objectFit="cover" key={shot.id} />
                      </chakra.span>
                    ))}
                </AvatarGroup>
              )}
              <Button
                rightIcon={<HiArrowRight />}
                variant="brand"
                href={`/studio/${project.id}`}
                as={Link}
              >
                Ver meu Studio
              </Button>
            </VStack>
          </Center>
        )}
      </VStack>

      {isTraining && (
        <Center marginX="auto">
          <VStack spacing={7}>
            <Spinner size="xl" speed="2s" />
            <Text textAlign="center" maxW="20rem">
              The studio is creating{" "}
              <b>the custom model based on your uploaded photos</b>. This
              operation usually takes ~20min.
            </Text>
          </VStack>
        </Center>
      )}

      {project.modelStatus === "failed" && (
        <Center marginX="auto">
          <Text my={10} color="red.600" textAlign="center">
            We are sorry but the creation of the model failed. Please contact us
            by email so we can fix it/refund you.
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default ProjectCard;
