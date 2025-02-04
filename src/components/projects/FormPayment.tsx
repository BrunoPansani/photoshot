import { formatStudioPrice } from "@/core/utils/prices";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  List,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Project } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CheckedListItem } from "../home/Pricing";

const FormPayment = ({
  project,
  handlePaymentSuccess,
}: {
  project: Project;
  handlePaymentSuccess: () => void;
}) => {
  const [waitingPayment, setWaitingPayment] = useState(false);

  const searchParams = useSearchParams();
  const ppi = searchParams!.get("ppi");
  const sessionId = searchParams!.get("session_id");

  useQuery(
    "check-payment",
    () => axios.get(`/api/checkout/check/${ppi}/${sessionId}/studio`),
    {
      cacheTime: 0,
      refetchInterval: 10,
      enabled: waitingPayment,
      onSuccess: () => {
        handlePaymentSuccess();
      },
    }
  );

  useEffect(() => {
    setWaitingPayment(ppi === project.id);
  }, [ppi, project]);

  return (
    <Box textAlign="center" width="100%">
      {waitingPayment ? (
        <Box>
          <Spinner speed="1s" size="xl" />
          <Text mt={2} size="sm">
            Validando pagamento
          </Text>
        </Box>
      ) : (
        <VStack spacing={4}>
          <Box fontWeight="black" fontSize="3.5rem">
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
          <Box fontWeight="bold" fontSize="xl">
            Seu Studio está pronto para ser treinado!
          </Box>
          <List textAlign="left" spacing={1}>
            <CheckedListItem>
              <b>1</b> Studio com um <b>modelo de IA personalizado</b>
            </CheckedListItem>
            <CheckedListItem>
              <b>{process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> avatares em geração 4K
            </CheckedListItem>
            <CheckedListItem>Refinamento de prompt por IA</CheckedListItem>
            <CheckedListItem>
              Seu Studio será excluído 24 horas após seus créditos serem esgotados
            </CheckedListItem>
          </List>
          <Button
            as={Link}
            variant="brand"
            href={`/api/checkout/session?ppi=${project.id}`}
          >
            Desbloquear Agora - {formatStudioPrice()}
          </Button>
          <Box pt={4}>
            <AvatarGroup size="md" max={10}>
              {project.imageUrls.map((url) => (
                <Avatar key={url} src={url} />
              ))}
            </AvatarGroup>
          </Box>

        </VStack>
      )}
    </Box>
  );
};

export default FormPayment;
