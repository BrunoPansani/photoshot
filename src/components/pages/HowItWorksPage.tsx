"use client";

import PageContainer from "@/components/layout/PageContainer";
import { Text, VStack } from "@chakra-ui/react";

const HowItWorksPage = () => (
  <PageContainer maxWidth="container.md">
    <VStack
      alignItems="flex-start"
      borderRadius="xl"
      p={10}
      backgroundColor="white"
      spacing={4}
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        as="h1"
      >
        Avatar com IA: como funciona?
      </Text>
      <Text>
        Já ouviu falar do Dreambooth? {"É"} uma nova ferramenta de IA que utiliza o
        modelo de difusão estável para criar avatares que se parecem exatamente com
        você! O modelo de difusão estável é um tipo de modelo generativo usado para
        criar imagens realistas e visualmente atraentes.
      </Text>
      <Text>
        Ele funciona difundindo as imagens geradas por meio de uma série de filtros,
        que suavizam a imagem e a tornam mais realista. Esse processo é repetido
        várias vezes, com as imagens geradas tornando-se progressivamente mais
        suaves e realistas a cada iteração. O Dreambooth usa o modelo de difusão
        estável para criar avatares que se parecem com você, com base em um conjunto
        de dados de entrada.
      </Text>
      <Text>
        {"É"} treinado em um grande conjunto de dados de imagens e utiliza esse
        treinamento para gerar novas imagens semelhantes às do conjunto de dados. O
        discriminador é usado para determinar se as imagens geradas são reais ou
        falsas. Um dos benefícios do Dreambooth é que ele pode criar avatares de
        alta qualidade com relativamente poucos dados de treinamento. Isso o torna
        uma ótima opção para situações em que há uma quantidade limitada de dados
        disponíveis ou quando os dados são muito grandes para serem processados por
        modelos generativos tradicionais.
      </Text>
      <Text>
        No geral, o Dreambooth é uma ferramenta poderosa de IA que utiliza o modelo
        de difusão estável para criar avatares que se parecem exatamente com você. O
        uso de difusão para suavizar e refinar as imagens geradas o torna uma
        alternativa eficaz e eficiente aos modelos generativos tradicionais. Assim,
        ele tem o potencial de revolucionar a maneira como criamos avatares e pode
        ter uma ampla gama de aplicações em áreas como gráficos computacionais,
        aprendizado de máquina e muito mais.
      </Text>
    </VStack>
  </PageContainer>
);

export default HowItWorksPage;
