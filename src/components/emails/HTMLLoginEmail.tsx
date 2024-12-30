import type { Theme } from "next-auth"

export type LoginEmailParams = {
  name: string;
  loginUrl: string;
  logoUrl: string;
  theme: Theme;
};

export default function LoginEmail(params: LoginEmailParams) {
  const { name, loginUrl, logoUrl, theme } = params

  const brandColor = theme.brandColor || "#346df1"
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || "#fff",
  }

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        <img src="${logoUrl}" alt="Photowiz Logo" style="max-width: 64px; height: auto;">
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Acesse <strong>${name}</strong> com um clique
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${loginUrl}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">
                Login</a></td>
          </tr>
          <tr>
            <td align="center"
              style="padding: 20px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              Ou copie e cole o link abaixo no seu navegador: <br><br><a href="#" target="_blank" style="color: ${brandColor}; text-decoration: none;">${loginUrl}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Se você não solicitou esse e-mail você pode ignorá-lo com segurança.
      </td>
    </tr>
  </table>
</body>
`
}
