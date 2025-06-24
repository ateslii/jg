import { Title, Section } from 'components/CommonStyles';
import {
  FlexContainer,
  StyledIcon,
  Link,
  Flex,
  FlexItem,
  Label,
} from './Contact.styled';

import { FiMapPin, FiMail } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import { SiInstagram } from 'react-icons/si';

import EmbeddedMap from '../components/EmbeddedMap';

export default function Contact() {
  return (
    <Section primary={'primary'}>
      <Title>Свяжитесь со мной</Title>
      <FlexContainer>
        <FlexItem>
          <Flex>
            <Label>Владивосток</Label>
          </Flex>
          <Flex>
            <StyledIcon as={FiMapPin} />
            <Label>
              Океанский проспект, 13а
            </Label>
          </Flex>
          <FlexItem>
            <EmbeddedMap
              latitude="37.76792182235917"
              longitude="-122.42869104099746"
              query="La+Rosa+Tattoo+14th+Street+San+Francisco"
            />
          </FlexItem>
          <br />

          <Flex>
            <StyledIcon as={FiMail} />
            <Link href="mailto:InkedbyAlina@gmail.com">Напишите мне</Link>
          </Flex>
          <Flex>
            <StyledIcon as={TfiTime} />
            <Label>11:00 - 20:00</Label>
          </Flex>
          <Flex>
            <StyledIcon as={SiInstagram} />
            <Link
              href="https://www.instagram.com/grostattoo?igsh=MTdnbnZvamZvcDk0Mg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram-page"
            >
              Инстаграм
            </Link>
          </Flex>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}
