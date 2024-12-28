"use client";

import PageContainer from "@/components/layout/PageContainer";
import { Link, List, ListItem, Text, VStack } from "@chakra-ui/react";

const TermsPage = () => (
  <PageContainer>
    <VStack
      margin="auto"
      maxWidth="container.lg"
      p={10}
      spacing={4}
      backgroundColor="white"
      borderRadius="lg"
      width="100%"
      alignItems="flex-start"
    >
      <Text fontWeight="bold" fontSize="3xl">
        Política de Privacidade da Photowiz
      </Text>

      <Text>
        É política da Photowiz respeitar sua privacidade e cumprir todas as leis e
        regulamentos aplicáveis em relação a quaisquer informações pessoais que possamos
        coletar sobre você, incluindo em nosso site,{" "}
        <Link textDecoration="underline" href="https://photowiz.app/">
          https://photowiz.app/
        </Link>
        , e outros sites que possuímos e operamos.{" "}
      </Text>
      <Text>
        Esta política é efetiva a partir de 14 de dezembro de 2022 e foi atualizada pela última vez em
        14 de dezembro de 2022.{" "}
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        Upload de fotos
      </Text>
      <Text>
        Para enviar fotos para este site, você deve garantir que sejam suas, que você tenha
        os direitos sobre elas e que não sejam fotos nuas ou pornográficas. Não somos responsáveis
        por quaisquer danos que possam resultar do envio de fotos que não atendam a esses critérios.
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Informações que coletamos
      </Text>
      <Text>
        As informações que coletamos incluem tanto informações que você fornece
        conscientemente e ativamente ao usar ou participar de qualquer um de nossos serviços
        e promoções, quanto quaisquer informações enviadas automaticamente pelos seus dispositivos
        durante o acesso aos nossos produtos e serviços.{" "}
      </Text>
      <Text fontWeight="semibold" fontSize="md">
        Dados de log
      </Text>
      <Text>
        Quando você visita nosso site, nossos servidores podem registrar automaticamente os
        dados padrão fornecidos pelo seu navegador. Isso pode incluir o endereço de IP do
        seu dispositivo, o tipo e versão do navegador, as páginas que você visita, a data e
        hora da sua visita, o tempo gasto em cada página, outros detalhes sobre sua visita e
        detalhes técnicos associados a quaisquer erros encontrados.{" "}
      </Text>
      <Text>
        Esteja ciente de que, embora essas informações possam não identificar você pessoalmente
        por si só, pode ser possível combiná-las com outros dados para identificar pessoas
        individualmente.{" "}
      </Text>
      <Text fontWeight="semibold" fontSize="md">
        Informações pessoais
      </Text>
      <Text>
        Podemos solicitar informações pessoais que podem incluir uma ou mais das seguintes:{" "}
      </Text>
      <List listStyleType="initial" pl={4}>
        <ListItem>Email</ListItem>
      </List>
      <Text fontWeight="semibold" fontSize="md">
        Razões legítimas para processar suas informações pessoais
      </Text>
      <Text>
        Coletamos e usamos suas informações pessoais apenas quando temos uma razão
        legítima para fazê-lo. Nesse caso, coletamos apenas informações pessoais que
        sejam razoavelmente necessárias para fornecer nossos serviços a você.{" "}
      </Text>
      <Text fontWeight="semibold" fontSize="md">
        Coleta e uso de informações
      </Text>
      <Text>
        Ao acessar e usar a Photowiz, você também está usando o serviço Replicate e,
        assim, aceitando os termos de uso descritos em
        <Link ml={1} href="https://replicate.com/privacy">
          https://replicate.com/privacy
        </Link>
        . Por favor, revise esses termos cuidadosamente antes de usar o serviço. Se
        você não concorda com esses termos, evite usar o serviço.
      </Text>
      <Text>
        Podemos coletar informações pessoais suas quando você fizer qualquer um dos
        seguintes em nosso site:{" "}
      </Text>
      <List listStyleType="initial" pl={4}>
        <ListItem>Usar um dispositivo móvel ou navegador para acessar nosso conteúdo</ListItem>
        <ListItem>
          Entrar em contato conosco por e-mail, redes sociais ou por tecnologias
          semelhantes
        </ListItem>
        <ListItem>Quando você nos mencionar nas redes sociais</ListItem>
      </List>
      <Text>
        Podemos coletar, armazenar, usar e divulgar informações para os seguintes
        propósitos, e as informações pessoais não serão processadas de forma
        incompatível com esses propósitos:{" "}
      </Text>
      <List listStyleType="initial" pl={4}>
        <ListItem>
          Permitir que você acesse e use nosso site, aplicativos associados e
          plataformas de mídia social associadas
        </ListItem>
      </List>
      <Text>
        Esteja ciente de que podemos combinar informações que coletamos sobre você com
        informações gerais ou dados de pesquisa que recebemos de outras fontes
        confiáveis.{" "}
      </Text>
      <Text fontWeight="semibold" fontSize="md">
        Segurança de suas informações pessoais
      </Text>
      <Text>
        Quando coletamos e processamos informações pessoais, e enquanto as mantemos,
        protegeremos dentro de meios comercialmente aceitáveis para evitar perda,
        roubo, acesso não autorizado, divulgação, cópia, uso ou modificação.{" "}
      </Text>
      <Text>
        Embora façamos o possível para proteger as informações pessoais que você nos
        fornece, avisamos que nenhum método de transmissão ou armazenamento eletrônico
        é 100% seguro, e ninguém pode garantir segurança absoluta dos dados. Cumpriremos
        as leis aplicáveis no caso de qualquer violação de dados.{" "}
      </Text>
      <Text>
        Você é responsável por escolher qualquer senha e sua força geral de segurança,
        garantindo a segurança de suas informações dentro dos limites de nossos
        serviços.{" "}
      </Text>
      <Text fontWeight="semibold" fontSize="md">
        Por quanto tempo mantemos suas informações pessoais
      </Text>
      <Text>
        Mantemos suas informações pessoais apenas pelo tempo necessário. Esse período
        pode depender do que estamos usando suas informações, de acordo com esta
        política de privacidade. Se suas informações pessoais não forem mais
        necessárias, as excluiremos ou as tornaremos anônimas.{" "}
      </Text>
      <Text>
        No entanto, se necessário, podemos reter suas informações pessoais para
        cumprir uma obrigação legal, contábil ou de relatório ou para fins de
        arquivamento no interesse público, para pesquisa científica ou histórica, ou
        para fins estatísticos.{" "}
      </Text>
      <Text>
        Você pode excluir todas as fotos e conjuntos de dados associados ao estúdio
        excluindo o estúdio de sua conta. Assim que os créditos do estúdio forem
        esgotados, o modelo será automaticamente excluído dentro de 24 horas.
      </Text>
      <Text>
        Para solicitar que sua conta e todos os dados associados sejam excluídos,
        envie um e-mail para{" "}
        <Link href="mailto:suporte@photowiz.app">suporte@photowiz.app</Link>. Por
        favor, observe que ao excluir sua conta, você não terá mais acesso a nenhum
        dos dados ou conteúdos associados à sua conta.
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Privacidade das Crianças
      </Text>
      <Text>
        Não direcionamos nenhum de nossos produtos ou serviços diretamente a
        crianças menores de 13 anos, e não coletamos intencionalmente informações
        pessoais sobre crianças menores de 13 anos.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Divulgação de Informações Pessoais a Terceiros
      </Text>
      <Text>Podemos divulgar informações pessoais para: </Text>
      <List listStyleType="initial" pl={4}>
        <ListItem>Uma empresa-mãe, subsidiária ou afiliada da nossa empresa</ListItem>
        <ListItem>
          Prestadores de serviços terceirizados para permitir que eles forneçam seus
          serviços, por exemplo, provedores de serviços de TI, armazenamento de dados,
          hospedagem e servidores, anunciantes ou plataformas de análise
        </ListItem>
        <ListItem>Nossos funcionários, contratados e/ou entidades relacionadas</ListItem>
        <ListItem>Nossos agentes ou parceiros comerciais existentes ou potenciais</ListItem>
        <ListItem>
          Patrocinadores ou promotores de qualquer competição, sorteio ou promoção
          que realizamos
        </ListItem>
        <ListItem>
          Tribunais, autoridades reguladoras e policiais, conforme exigido por lei,
          em conexão com qualquer processo legal atual ou prospectivo, ou para
          estabelecer, exercer ou defender nossos direitos legais
        </ListItem>
        <ListItem>
          Terceiros, incluindo agentes ou subcontratados, que nos ajudam a fornecer
          informações, produtos, serviços ou marketing direto a você
        </ListItem>
      </List>

      <Text fontWeight="bold" fontSize="xl">
        Transferências Internacionais de Informações Pessoais
      </Text>
      <Text>
        As informações pessoais que coletamos são armazenadas e/ou processadas onde
        nós ou nossos parceiros, afiliados e provedores terceirizados mantêm
        instalações. Esteja ciente de que os locais onde armazenamos, processamos ou
        transferimos suas informações pessoais podem não ter as mesmas leis de
        proteção de dados do país onde você inicialmente forneceu as informações. Se
        transferirmos suas informações pessoais para terceiros em outros países: (i)
        realizaremos essas transferências de acordo com os requisitos da legislação
        aplicável; e (ii) protegeremos as informações transferidas de acordo com
        esta política de privacidade.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Seus Direitos e Controle sobre Suas Informações Pessoais
      </Text>
      <Text>
        Você sempre mantém o direito de reter informações pessoais de nós, com o
        entendimento de que sua experiência em nosso site pode ser afetada. Não vamos
        discriminá-lo por exercer quaisquer de seus direitos sobre suas informações
        pessoais. Se você nos fornecer informações pessoais, entende que as
        coletaremos, manteremos, usaremos e divulgaremos de acordo com esta política
        de privacidade. Você mantém o direito de solicitar detalhes de quaisquer
        informações pessoais que mantemos sobre você.{" "}
      </Text>
      <Text>
        Se recebermos informações pessoais sobre você de um terceiro, protegeremos
        essas informações conforme estabelecido nesta política de privacidade. Se
        você for um terceiro fornecendo informações pessoais sobre outra pessoa, você
        declara e garante que tem o consentimento dessa pessoa para fornecer as
        informações pessoais para nós.{" "}
      </Text>
      <Text>
        Se você acredita que quaisquer informações que mantemos sobre você estão
        imprecisas, desatualizadas, incompletas, irrelevantes ou enganosas, entre em
        contato conosco usando os detalhes fornecidos nesta política de privacidade.
        Tomaremos medidas razoáveis para corrigir quaisquer informações consideradas
        imprecisas, incompletas, enganosas ou desatualizadas.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Uso de Cookies
      </Text>
      <Text>
        Usamos &ldquo;cookies&rdquo; para coletar informações sobre você e sua
        atividade em nosso site. Um cookie é um pequeno pedaço de dados que nosso
        site armazena no seu computador e acessa cada vez que você visita, para que
        possamos entender como você usa nosso site. Isso nos ajuda a fornecer
        conteúdo com base em suas preferências.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Limites da Nossa Política
      </Text>
      <Text>
        Nosso site pode conter links para sites externos que não são operados por
        nós. Esteja ciente de que não temos controle sobre o conteúdo e as políticas
        desses sites e não podemos aceitar responsabilidade ou obrigação por suas
        respectivas práticas de privacidade.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Alterações a Esta Política
      </Text>
      <Text>
        A nosso critério, podemos alterar nossa política de privacidade para refletir
        atualizações nos nossos processos de negócios, práticas aceitáveis atuais ou
        alterações legislativas ou regulatórias. Se decidirmos alterar esta política
        de privacidade, publicaremos as alterações aqui no mesmo link pelo qual você
        está acessando esta política de privacidade.{" "}
      </Text>
      <Text>
        Se exigido por lei, obteremos sua permissão ou daremos a oportunidade de
        optar por entrar ou sair, conforme aplicável, de novos usos de suas
        informações pessoais.{" "}
      </Text>

      <Text fontWeight="bold" fontSize="xl">
        Entre em Contato
      </Text>
      <Text>
        Para quaisquer dúvidas ou preocupações relacionadas à sua privacidade, você
        pode entrar em contato conosco usando os seguintes detalhes:{" "}
        <Link href="mailto:suporte@photowiz.app">suporte@photowiz.app</Link>
      </Text>
    </VStack>
  </PageContainer>
);

export default TermsPage;
