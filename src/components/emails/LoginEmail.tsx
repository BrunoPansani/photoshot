import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";

export default function LoginEmail({ url }: { url: string }): JSX.Element {
  return (
    <Mjml>
      <MjmlBody width={500}>
        <MjmlWrapper>
          <MjmlSection>
            <MjmlColumn>
              <MjmlImage
                padding="12px 0 24px"
                width="70px"
                height="70px"
                align="center"
                // Get URL from .env
                src="https://photowiz.app/favicon.ico"
              />
              <MjmlText fontWeight={800} fontSize={20} align="center">
                Seu link de login para Photowiz chegou
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText>
                Obrigado por acessar o Photowiz! Por favor clique no link abaixo para acessar sua conta.
              </MjmlText>
              <>
                <MjmlButton
                  href={url}
                  width="100%"
                  fontWeight={800}
                  fontSize={16}
                  align="left"
                  backgroundColor="#B5FFD9"
                  color="#415C4E"
                >
                  Sign In
                </MjmlButton>
              </>
              <MjmlText>
                {`If you're on a mobile device, you can also copy the link below
                and paste it into the browser of your choice.`}
              </MjmlText>
              <MjmlText>
                <a
                  rel="nofollow"
                  style={{
                    textDecoration: "none",
                    color: `#847F7D !important`,
                  }}
                >
                  {url.replace(/^https?:\/\//, "")}
                </a>
              </MjmlText>
              <MjmlText>
                Se você não conseguir clicar no link, você pode copiar e colar o link abaixo no seu navegador de escolha: 
              </MjmlText>
              <MjmlText>
                {url.replace(/^https?:\/\//, "")}
              </MjmlText>
              <MjmlText>
                Se você não solicitou este email, você pode ignorá-lo com segurança.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
