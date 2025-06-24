import {
  DevLink,
  FooterContainer,
  Link,
  LinksContainer,
  FlexContainer,
  GitIcon,
  GitIconTwo,
} from './Footer.styled';
import { SiInstagram, SiTiktok, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterContainer>
      {/*<FlexContainer>*/}
      {/*  <p>&copy; 2023 Developed by</p>*/}
      {/*  <DevLink*/}
      {/*    href="https://github.com/VadymPopov"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*    aria-label="frontend-developer-github"*/}
      {/*  >*/}
      {/*    <GitIcon />*/}
      {/*  </DevLink>{' '}*/}
      {/*  <span>&</span>*/}
      {/*  <DevLink*/}
      {/*    href="https://github.com/AnastasiiaKor"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*    aria-label="backend-developer-github"*/}
      {/*  >*/}
      {/*    <GitIconTwo />*/}
      {/*  </DevLink>*/}
      {/*</FlexContainer>*/}
      <LinksContainer>
        <Link
          href="https://api.whatsapp.com/send?phone=79990859021&fbclid=PAZXh0bgNhZW0CMTEAAaczQJc7KArvikA7THT_La1zpIH11bkUwtZ7tbiV6MxlbraJ1B3i6h8lwshAZw_aem_32HhnLXg_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="tiktok-page"
        >
          <SiWhatsapp />
        </Link>
        <Link
          href="https://www.instagram.com/grostattoo?igsh=MTdnbnZvamZvcDk0Mg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram-page"
        >
          <SiInstagram></SiInstagram>
        </Link>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
