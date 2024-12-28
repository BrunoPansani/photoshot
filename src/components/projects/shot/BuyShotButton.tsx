import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { useQuery } from "react-query";

const BuyShotButton = ({
  credits,
  onPaymentSuccess,
}: {
  credits: number;
  onPaymentSuccess: (credits: number, promptWizardCredits: number) => void;
}) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const { id: projectId } = useParams() as { id: string };

  const ppi = searchParams!.get("ppi");
  const sessionId = searchParams!.get("session_id");

  const [waitingPayment, setWaitingPayment] = useState(false);

  const { isLoading } = useQuery(
    "check-shot-payment",
    () => axios.get(`/api/checkout/check/${ppi}/${sessionId}/shot`),
    {
      cacheTime: 0,
      refetchInterval: 4,
      retry: 0,
      enabled: waitingPayment,
      onSuccess: (response) => {
        const { credits, promptWizardCredits } = response.data;
        onPaymentSuccess(credits, promptWizardCredits);
      },
      onSettled: () => {
        setWaitingPayment(false);
      },
    }
  );

  useEffect(() => {
    setWaitingPayment(ppi === projectId);
  }, [ppi, projectId]);

  const handleShotPayment = (quantity: number) => {
    push(`/api/checkout/shots?quantity=${quantity}&ppi=${projectId}`);
  };

  return (
    <Menu>
      <MenuButton
        rightIcon={<BsChevronDown />}
        isLoading={isLoading}
        size="xs"
        shadow="none"
        variant="brand"
        as={Button}
      >
        <HStack spacing={0}>
          <IoIosFlash />
          {credits === 0 ? (
            <Text>Comprar mais créditos</Text>
          ) : (
            <Text>
              {credits} Foto{credits > 1 && "s"} restante{credits > 1 && "s"}
            </Text>
          )}
        </HStack>
      </MenuButton>
      <MenuList fontSize="sm">
        <MenuItem
          command="$25"
          onClick={() => {
            handleShotPayment(100);
          }}
        >
          <b>100 fotos</b>
        </MenuItem>
        <MenuItem
          command="$45"
          onClick={() => {
            handleShotPayment(200);
          }}
        >
          <b>200 fotos</b>
        </MenuItem>
        <MenuItem
          command="$60"
          onClick={() => {
            handleShotPayment(300);
          }}
        >
          <b>300 fotos</b>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BuyShotButton;
