import { footerText, footerIcons } from "../dataObjects";
// @ts-ignore
import { footerStyles } from "../../styles/index.js";

function FooterText(content: any) {
  const arr = content.content;
  return (
    <footerStyles.FooterContentWrapper direction="column">
      {arr.map((link: any) => (
        <footerStyles.TextLink
          key={link.title}
          to={link.link}
          target={link.target}
        >
          {link.title}
        </footerStyles.TextLink>
      ))}
    </footerStyles.FooterContentWrapper>
  );
}

function FooterIcons(content: any) {
  const arr = content.content;
  return (
    <footerStyles.FooterContentWrapper direction="row">
      {arr.map((link: any) => (
        <footerStyles.IconLink
          key={link.title}
          to={link.link}
          target={link.target}
          dangerouslySetInnerHTML={{ __html: link.title }}
        ></footerStyles.IconLink>
      ))}
    </footerStyles.FooterContentWrapper>
  );
}

export default function Footer() {
  return (
    <footerStyles.FooterWrapper>
      <FooterText content={footerText} />
      <FooterIcons content={footerIcons} />
    </footerStyles.FooterWrapper>
  );
}
