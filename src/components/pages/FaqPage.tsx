"use client";

import PageContainer from "@/components/layout/PageContainer";
import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const FaqPage = () => (
  <PageContainer>
    <VStack
      marginX="auto"
      maxWidth="container.lg"
      p={10}
      spacing={4}
      backgroundColor="white"
      borderRadius="lg"
      width="100%"
      alignItems="flex-start"
    >
      <Text fontWeight="bold" fontSize="3xl">
        Perguntas Frequentes
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        📸 Que tipo de fotos devo enviar para a plataforma?
      </Text>
      <Text>
        Recomendamos que você envie uma variedade de fotos para garantir que seu
        avatar seja o mais preciso possível. Isso pode incluir fotos de close do seu
        rosto, fotos de perfil e fotos de corpo inteiro. {`É`}{" "}
        importante garantir que suas fotos sejam claras, de alta qualidade e que não
        incluam outras pessoas ou animais. Também recomendamos que você inclua uma
        gama de expressões, locais, cenários e perspectivas em suas fotos para criar
        o avatar mais preciso possível.
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        👩‍🎨 Quão parecido será o avatar com a minha aparência?
      </Text>
      <Text>
        A precisão do seu avatar dependerá principalmente do número e da variedade de
        fotos que você fornecer. Quanto melhores e mais diversas forem as fotos, mais
        fácil será para a IA entender e replicar suas características faciais e
        corporais. Como resultado, seu avatar terá maior probabilidade de se parecer
        com sua aparência real!
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        💰 É possível obter um reembolso?
      </Text>
      <Text>
        É possível obter um reembolso para compras feitas dentro dos primeiros 14
        dias, desde que você ainda não tenha treinado a IA. No entanto, após o
        período de 14 dias ou se você já tiver usado o serviço (clicando no botão de
        treinar), você não terá mais direito ao reembolso.
      </Text>
      <Text>
        Certifique-se de enviar um número suficiente de fotos de alta qualidade para
        evitar desapontamentos com os avatares gerados!
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        🖼 O que acontecerá com minhas fotos?
      </Text>
      <Text>
        Você pode excluir todas as fotos e conjuntos de dados associados ao estúdio
        excluindo o estúdio de sua conta. Assim que os créditos do estúdio forem
        esgotados, o modelo será automaticamente excluído dentro de 24 horas.
      </Text>
      <Text>
        Para solicitar que sua conta e todos os dados associados sejam excluídos,
        envie um e-mail para{" "}
        <Link href="mailto:suporte@photowiz.app">suporte@photowiz.app</Link>. Por favor,
        note que ao excluir sua conta, você não terá mais acesso a nenhum dos dados
        ou conteúdos associados à sua conta.
      </Text>
      <Text>
        Esteja ciente de que apenas os dados nos servidores da Photowiz serão
        excluídos. Dados transmitidos para o Replicate não serão excluídos. Você
        precisará contatá-los para fazer isso, de acordo com os{" "}
        <Link href="https://replicate.com/privacy">Termos de Serviço</Link> deles.
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        ❓ Como funciona?
      </Text>
      <Text>
        Veja <Link href="/how-it-works">esta página</Link>
      </Text>

    </VStack>
  </PageContainer>
);

export default FaqPage;
