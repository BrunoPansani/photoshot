// from https://github.com/fnando/email-provider-info

import { SendVerificationRequestParams } from 'next-auth/providers';
import resend from '@/core/clients/resend';
import HTMLLoginEmail from '@/components/emails/HTMLLoginEmail';

export type EmailProvider = {
  name: string;
  url: string;
  hosts: string[];
};

export const providers: EmailProvider[] = [
  {
    name: "Gmail",
    url: "https://mail.google.com/",
    hosts: ["gmail.com", "googlemail.com"],
  },

  {
    name: "Outlook",
    url: "https://outlook.live.com/",
    hosts: ["outlook.com", "hotmail.com", "live.com"],
  },

  {
    name: "Yahoo!",
    url: "https://mail.yahoo.com/",
    hosts: [
      "yahoo.com",
      "yahoo.es",
      "yahoo.it",
      "yahoo.de",
      "yahoo.fr",
      "yahoo.in",
      "yahoo.ca",
      "yahoo.com.br",
      "yahoo.com.au",
      "yahoo.com.ar",
      "yahoo.com.mx",
      "yahoo.com.sg",
      "yahoo.co.id",
      "yahoo.co.in",
      "yahoo.co.jp",
      "yahoo.co.uk",
    ],
  },

  {
    name: "Fastmail",
    url: "https://www.fastmail.com/mail/",
    hosts: [
      "123mail.org",
      "150mail.com",
      "150ml.com",
      "16mail.com",
      "2-mail.com",
      "4email.net",
      "50mail.com",
      "airpost.net",
      "allmail.net",
      "bestmail.us",
      "cluemail.com",
      "elitemail.org",
      "emailcorner.net",
      "emailengine.net",
      "emailengine.org",
      "emailgroups.net",
      "emailplus.org",
      "emailuser.net",
      "eml.cc",
      "f-m.fm",
      "fast-email.com",
      "fast-mail.org",
      "fastem.com",
      "fastemail.us",
      "fastemailer.com",
      "fastest.cc",
      "fastimap.com",
      "fastmail.cn",
      "fastmail.co.uk",
      "fastmail.com",
      "fastmail.com.au",
      "fastmail.de",
      "fastmail.es",
      "fastmail.fm",
      "fastmail.fr",
      "fastmail.im",
      "fastmail.in",
      "fastmail.jp",
      "fastmail.mx",
      "fastmail.net",
      "fastmail.nl",
      "fastmail.org",
      "fastmail.se",
      "fastmail.to",
      "fastmail.tw",
      "fastmail.uk",
      "fastmail.us",
      "fastmailbox.net",
      "fastmessaging.com",
      "fea.st",
      "fmail.co.uk",
      "fmailbox.com",
      "fmgirl.com",
      "fmguy.com",
      "ftml.net",
      "h-mail.us",
      "hailmail.net",
      "imap-mail.com",
      "imap.cc",
      "imapmail.org",
      "inoutbox.com",
      "internet-e-mail.com",
      "internet-mail.org",
      "internetemails.net",
      "internetmailing.net",
      "jetemail.net",
      "justemail.net",
      "letterboxes.org",
      "mail-central.com",
      "mail-page.com",
      "mailandftp.com",
      "mailas.com",
      "mailbolt.com",
      "mailc.net",
      "mailcan.com",
      "mailforce.net",
      "mailftp.com",
      "mailhaven.com",
      "mailingaddress.org",
      "mailite.com",
      "mailmight.com",
      "mailnew.com",
      "mailsent.net",
      "mailservice.ms",
      "mailup.net",
      "mailworks.org",
      "ml1.net",
      "mm.st",
      "myfastmail.com",
      "mymacmail.com",
      "nospammail.net",
      "ownmail.net",
      "petml.com",
      "postinbox.com",
      "postpro.net",
      "proinbox.com",
      "promessage.com",
      "realemail.net",
      "reallyfast.biz",
      "reallyfast.info",
      "rushpost.com",
      "sent.as",
      "sent.at",
      "sent.com",
      "speedpost.net",
      "speedymail.org",
      "ssl-mail.com",
      "swift-mail.com",
      "the-fastest.net",
      "the-quickest.com",
      "theinternetemail.com",
      "veryfast.biz",
      "veryspeedy.net",
      "warpmail.net",
      "xsmail.com",
      "yepmail.net",
      "your-mail.com",
    ],
  },
  {
    name: "ProtonMail",
    url: "https://mail.protonmail.com/",
    hosts: ["protonmail.com", "protonmail.ch", "pm.me"],
  },
  {
    name: "Apple iCloud",
    url: "https://www.icloud.com/mail/",
    hosts: ["icloud.com", "me.com", "mac.com"],
  },
  {
    name: "Mail.ru",
    url: "https://mail.ru/",
    hosts: ["mail.ru", "bk.ru", "inbox.ru", "list.ru"],
  },
  {
    name: "Mail.ru",
    url: "https://mail.ru/",
    hosts: ["mail.ru", "bk.ru", "inbox.ru", "list.ru"],
  },
  {
    name: "AOL",
    url: "https://aol.com/",
    hosts: ["aol.com"],
  },
  {
    name: "Zoho",
    url: "https://mail.zoho.com/",
    hosts: ["zohomail.com", "zoho.com"],
  },
  {
    name: "BOL",
    url: "https://email.bol.uol.com.br/",
    hosts: ["bol.com.br"],
  },
  {
    name: "UOL",
    url: "https://email.uol.com.br/",
    hosts: ["uol.com.br"],
  },
];

export function getEmailProvider(email: string): EmailProvider {
  const [, host] = email.split("@");

  return (
    providers.find((provider) => provider.hosts.includes(host)) ?? {
      name: "",
      url: "",
      hosts: [],
    }
  );
}

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams,
) => {
  let { identifier: email, url, provider: { from }, theme } = params;
  try {
    let send = await resend.emails.send({
      from: from,
      to: email,
      subject: 'Login to your Photowiz dashboard',
      text: 'Click the magic link below to sign in to your account:\n\n' + url,
      // Render the LoginEmail template
      html: HTMLLoginEmail({
        name: 'Photowiz',
        loginUrl: url,
        logoUrl: `${process.env.NEXTAUTH_URL}/logo.png`,
        theme: theme
      }),
    });
    
    if (send.error) {
      throw new Error(send.error?.message);
    }

  } catch (error) {
    console.log({ error });
  }
};
